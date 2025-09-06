# 🐳 Desarrollo con Docker - El Macún

## Requisitos Previos

### Windows
1. **Docker Desktop para Windows**
   - Descargar desde: https://www.docker.com/products/docker-desktop/
   - Instalar con WSL2 backend (recomendado)
   - Verificar instalación: `docker --version`

2. **WSL2 (Recomendado)**
   - Windows Subsystem for Linux 2
   - Mejor rendimiento y compatibilidad

## 🚀 Comandos de Desarrollo

### Desarrollo Local
```bash
# Levantar el proyecto en modo desarrollo
pnpm run docker:dev

# O directamente con docker-compose
docker-compose up --build
```

### Producción Local
```bash
# Levantar en modo producción
pnpm run docker:prod

# O con archivo específico
docker-compose -f docker-compose.prod.yml up --build
```

### Gestión de Contenedores
```bash
# Detener contenedores
pnpm run docker:down

# Limpiar todo (contenedores, volúmenes, imágenes)
pnpm run docker:clean

# Ver logs en tiempo real
docker-compose logs -f el-macun-app
```

## 📁 Estructura de Archivos Docker

```
el-macun/
├── Dockerfile                 # Multi-stage build
├── docker-compose.yml         # Desarrollo
├── docker-compose.prod.yml    # Producción
├── .dockerignore             # Archivos a ignorar
└── DOCKER_DEVELOPMENT.md     # Esta documentación
```

## 🔧 Configuración

### Puertos
- **Desarrollo**: http://localhost:3000
- **Producción**: http://localhost:3000

### Volúmenes (Desarrollo)
- Código fuente montado para hot reload
- `node_modules` como volumen para rendimiento
- `.next` cache como volumen

### Variables de Entorno
```bash
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

## 🐛 Troubleshooting

### Problemas Comunes

1. **Puerto 3000 ocupado**
   ```bash
   # Cambiar puerto en docker-compose.yml
   ports:
     - "3001:3000"  # Usar puerto 3001 en host
   ```

2. **Permisos en Windows**
   ```bash
   # Ejecutar PowerShell como administrador
   # O configurar Docker Desktop con WSL2
   ```

3. **Volúmenes no se actualizan**
   ```bash
   # Reconstruir contenedor
   docker-compose down
   docker-compose up --build
   ```

4. **Memoria insuficiente**
   ```bash
   # Aumentar memoria en Docker Desktop
   # Settings > Resources > Memory
   ```

### Comandos de Diagnóstico
```bash
# Ver contenedores activos
docker ps

# Ver imágenes
docker images

# Ver logs específicos
docker logs el-macun-dev

# Entrar al contenedor
docker exec -it el-macun-dev sh

# Ver uso de recursos
docker stats
```

## 🚀 Despliegue en Orange Pi Zero 3

### Preparación
1. **Imagen optimizada para ARM64**
   ```bash
   # Build para arquitectura ARM64
   docker buildx build --platform linux/arm64 -t el-macun:arm64 .
   ```

2. **Transferir a Orange Pi**
   ```bash
   # Exportar imagen
   docker save el-macun:arm64 | gzip > el-macun-arm64.tar.gz
   
   # Transferir y cargar en Orange Pi
   scp el-macun-arm64.tar.gz pi@orange-pi-ip:/home/pi/
   ssh pi@orange-pi-ip
   docker load < el-macun-arm64.tar.gz
   ```

3. **Cloudflare Tunnel**
   ```bash
   # Instalar cloudflared
   # Configurar tunnel
   # Exponer puerto 3000
   ```

## 📊 Monitoreo

### Health Checks
- Endpoint: `http://localhost:3000`
- Intervalo: 30 segundos
- Timeout: 10 segundos

### Logs
```bash
# Logs en tiempo real
docker-compose logs -f

# Logs con timestamps
docker-compose logs -f -t
```

## 🔒 Seguridad

### Buenas Prácticas
- Usuario no-root en producción
- Imágenes base minimalistas (Alpine)
- Variables de entorno para secretos
- Health checks configurados
- Restart policies definidas

### Variables Sensibles
```bash
# Crear archivo .env (no versionar)
NODE_ENV=production
DATABASE_URL=...
API_SECRET=...
```

## 📈 Optimizaciones

### Build Cache
- Multi-stage builds
- Layer caching
- .dockerignore optimizado

### Runtime
- Standalone output de Next.js
- Imagen Alpine Linux
- Usuario no-root
- Health checks

---

**Nota**: Este setup está optimizado para desarrollo en Windows y despliegue en Orange Pi Zero 3 con Cloudflare Tunnel.

