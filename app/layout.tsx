import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "El Macún | Filmación Aérea Profesional con Dron",
  description:
    "El Macún ofrece filmación y fotografía aérea profesional con dron: paisajes, eventos, inspecciones y más. Estética cinematográfica y entrega ágil.",
  keywords: "dron, filmación aérea, fotografía aérea, cinematografía, paisajes, eventos, inspecciones",
  authors: [{ name: "El Macún" }],
  icons: {
    icon: "/logo_el-macun.png",
    shortcut: "/logo_el-macun.png",
    apple: "/logo_el-macun.png",
  },
  openGraph: {
    title: "El Macún | Filmación Aérea Profesional con Dron",
    description: "Imágenes que transmiten calma, belleza y grandeza natural.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/logo_el-macun.png",
        width: 512,
        height: 512,
        alt: "El Macún Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Macún | Filmación Aérea Profesional con Dron",
    description: "Imágenes que transmiten calma, belleza y grandeza natural.",
    images: ["/logo_el-macun.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-serif: ${manrope.variable};
}
        `}</style>
      </head>
      <body className="antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
