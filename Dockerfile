# Dockerfile para El Macún - Next.js App
# Multi-stage build para desarrollo y producción

# ===========================================
# Base stage - Node.js con pnpm
# ===========================================
FROM node:20-alpine AS base

# Instalar pnpm
RUN npm install -g pnpm

# Configurar directorio de trabajo
WORKDIR /app

# ===========================================
# Dependencies stage
# ===========================================
FROM base AS deps

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --no-frozen-lockfile

# ===========================================
# Development stage
# ===========================================
FROM base AS dev

# Copiar dependencias desde deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Copiar código fuente
COPY . .

# Exponer puerto de desarrollo
EXPOSE 3000

# Comando para desarrollo
CMD ["pnpm", "dev"]

# ===========================================
# Build stage
# ===========================================
FROM base AS builder

# Copiar dependencias
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Copiar código fuente
COPY . .

# Build de la aplicación
RUN pnpm build

# ===========================================
# Production stage
# ===========================================
FROM node:20-alpine AS production

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache wget

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Configurar directorio de trabajo
WORKDIR /app

# Copiar archivos de build desde builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar ownership de archivos
RUN chown -R nextjs:nodejs /app

# Cambiar a usuario no-root
USER nextjs

# Exponer puerto
EXPOSE 3000

# Variables de entorno para producción
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Comando de producción
CMD ["node", "server.js"]

