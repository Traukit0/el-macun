"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Camera,
  Video,
  Search,
  MapPin,
  Calendar,
  Palette,
  Play,
  Star,
  ArrowUp,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedButton } from "@/components/animated-button"
import { ModernCard } from "@/components/modern-card"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

export default function ElMacunLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 800], [0, 300])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const ctaY = useTransform(scrollY, [1000, 1800], [0, 200])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Filmación Cinematográfica",
      description: "Videos aéreos en 4K/5K con estética cinematográfica profesional",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Fotografía Aérea",
      description: "Imágenes de alta resolución que capturan la grandeza de cada momento",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Inspecciones Técnicas",
      description: "Análisis detallado de estructuras e infraestructuras con precisión",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Turismo y Paisajes",
      description: "Capturamos la belleza natural de destinos únicos",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Cobertura de Eventos",
      description: "Perspectivas únicas para bodas, celebraciones y eventos corporativos",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Edición y Colorización",
      description: "Postproducción profesional que realza cada imagen",
    },
  ]

  const portfolioItems = [
    { category: "Naturaleza", title: "Costa Atlántica", image: "/placeholder.svg?height=300&width=400" },
    { category: "Ciudades", title: "Skyline Urbano", image: "/placeholder.svg?height=300&width=400" },
    { category: "Eventos", title: "Boda en Viñedo", image: "/placeholder.svg?height=300&width=400" },
    { category: "Comercial", title: "Resort Costero", image: "/placeholder.svg?height=300&width=400" },
    { category: "Naturaleza", title: "Montañas Nevadas", image: "/placeholder.svg?height=300&width=400" },
    { category: "Ciudades", title: "Puerto Histórico", image: "/placeholder.svg?height=300&width=400" },
    { category: "Eventos", title: "Festival Musical", image: "/placeholder.svg?height=300&width=400" },
    { category: "Comercial", title: "Complejo Industrial", image: "/placeholder.svg?height=300&width=400" },
  ]

  const pricingPlans = [
    {
      name: "Básico",
      price: "$70.000",
      description: "Perfecto para proyectos pequeños",
      features: [
        "1 hora de vuelo",
        "1 clip de 45 segundos",
        "Entrega en 48h",
        "Resolución 4K",
      ],
    },
    {
      name: "Profesional",
      price: "$100.000",
      description: "Ideal para eventos y comercial",
      features: [
        "2-3 horas de vuelo",
        "1 clip de 60-90 segundos",
        "Entrega en 72h",
        "Resolución 5K",
        "Edición básica",
      ],
      popular: true,
    },
    {
      name: "Cinemático",
      price: "$150.000",
      description: "Para producciones de alta gama",
      features: [
        "Media jornada completa",
        "1-2 clips profesionales",
        "Entrega en 5 días",
        "Resolución 5K+",
        "Edición avanzada",
        "Música personalizada",
      ],
    },
    {
      name: "A Medida",
      price: "Consultar",
      description: "Soluciones personalizadas",
      features: [
        "Duración personalizada",
        "Entregables a medida",
        "Múltiples localizaciones",
        "Equipo especializado",
        "Postproducción completa",
        "Soporte técnico",
      ],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Brief y Planificación",
      description: "Definimos objetivos, localizaciones y requisitos técnicos",
    },
    {
      number: "02",
      title: "Vuelo y Captura",
      description: "Realizamos la filmación con equipos profesionales certificados",
    },
    {
      number: "03",
      title: "Edición y Color",
      description: "Postproducción cinematográfica con colorización profesional en DaVinci Resolve",
    },
    {
      number: "04",
      title: "Entrega y Ajustes",
      description: "Entregamos el material final con revisiones incluidas",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      company: "Resort Costa Brava",
      content:
        "El trabajo de El Macún superó nuestras expectativas. Las imágenes aéreas de nuestro resort son simplemente espectaculares.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Carlos Ruiz",
      role: "Organizador de Eventos",
      company: "Bodas Únicas",
      content:
        "La cobertura aérea de nuestras bodas ha añadido una dimensión completamente nueva. Calidad cinematográfica excepcional.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ana Martín",
      role: "Arquitecta",
      company: "Estudio Martín",
      content:
        "Las inspecciones técnicas con dron nos han permitido detectar problemas que serían imposibles de ver desde tierra.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav backdrop-blur-xl border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-serif font-bold text-white"
          >
            El Macún
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {["inicio", "servicios", "portafolio", "planes", "proceso", "nosotros", "contacto"].map(
              (section, index) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-cyan-300 transition-all duration-300 font-medium capitalize relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <ThemeToggle />
            <div className="hidden md:block">
              <AnimatedButton onClick={() => scrollToSection("contacto")}>Cotiza tu vuelo</AnimatedButton>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-slate-700/50"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["inicio", "servicios", "portafolio", "planes", "proceso", "nosotros", "contacto"].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(section)}
                  className="block text-white hover:text-cyan-300 transition-colors capitalize font-medium"
                >
                  {section}
                </motion.button>
              ))}
              <AnimatedButton onClick={() => scrollToSection("contacto")} className="w-full">
                Cotiza tu vuelo
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(15, 23, 42, 0.8) 100%), url('/cinematic-aerial-landscape-drone-view-mountains-oc.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-serif font-bold mb-6 text-white drop-shadow-2xl animate-glow"
            >
              El Macún
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl mb-4 text-gray-100 font-light tracking-wide drop-shadow-lg"
            >
              Filmación aérea profesional con dron
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              Imágenes que transmiten calma, belleza y grandeza natural con la más alta calidad cinematográfica
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {["4K/5K", "Operador Certificado", "Postproducción Incluida"].map((badge, index) => (
                <motion.div
                  key={badge}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium border border-cyan-500/50 text-white shadow-lg"
                >
                  {badge}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <AnimatedButton variant="outline" size="lg" onClick={() => scrollToSection("portafolio")}>
                Ver Portafolio
              </AnimatedButton>
              <AnimatedButton size="lg" onClick={() => scrollToSection("contacto")}>
                Cotiza tu vuelo
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-8 h-8 drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-serif font-bold mb-8 gradient-text">
              Lo que hacemos
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Servicios especializados en filmación y fotografía aérea con la más alta calidad cinematográfica
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ModernCard className="h-full p-8 group cursor-pointer">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-cyan-400 mb-6 inline-block">
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </ModernCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <AnimatedButton variant="outline" size="lg" onClick={() => scrollToSection("planes")}>
              Ver paquetes y precios
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Trabajos recientes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una selección de nuestros proyectos más destacados
            </motion.p>
          </motion.div>

          <Tabs defaultValue="Naturaleza" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="Naturaleza">Naturaleza</TabsTrigger>
              <TabsTrigger value="Ciudades">Ciudades</TabsTrigger>
              <TabsTrigger value="Eventos">Eventos</TabsTrigger>
              <TabsTrigger value="Comercial">Comercial</TabsTrigger>
            </TabsList>

            {["Naturaleza", "Ciudades", "Eventos", "Comercial"].map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {portfolioItems
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                          <div className="relative overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Play className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Paquetes pensados para ti
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu proyecto
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Más Popular</Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => scrollToSection("contacto")}
                    >
                      {plan.name === "A Medida" ? "Solicitar cotización" : "Cotizar"}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Así trabajamos
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso profesional que garantiza resultados excepcionales
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mr-6">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Quiénes somos
            </motion.h2>
            <motion.div variants={fadeInUp} className="mb-8">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="El Macún Team"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
              En El Macún, combinamos la pasión por la cinematografía con la tecnología más avanzada en drones
              profesionales. Nuestro enfoque artístico y técnico nos permite capturar imágenes que no solo documentan,
              sino que emocionan y transmiten la esencia única de cada proyecto.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Con años de experiencia en paisajes evocativos y una estética cinematográfica distintiva, nos
              especializamos en crear contenido visual que perdura en el tiempo.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
              <Button variant="outline" size="lg">
                <Youtube className="w-5 h-5 mr-2" />
                YouTube
              </Button>
              <Button variant="outline" size="lg">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Lo que dicen nuestros clientes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor logro
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: ctaY }}>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/placeholder.svg?height=600&width=1920')`,
            }}
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              ¿Listo para elevar tu proyecto?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto">
              Convierte tu visión en imágenes cinematográficas que perduren para siempre
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Agenda una llamada
              </Button>
              <Button size="lg" onClick={() => scrollToSection("contacto")}>
                Solicita un presupuesto
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Conversemos tu idea
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para hacer realidad tu proyecto de filmación aérea
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre *</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input placeholder="+56 9 00000000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tipo de proyecto *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de proyecto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cinematografico">Filmación Cinematográfica</SelectItem>
                        <SelectItem value="fotografia">Fotografía Aérea</SelectItem>
                        <SelectItem value="inspeccion">Inspección Técnica</SelectItem>
                        <SelectItem value="evento">Cobertura de Evento</SelectItem>
                        <SelectItem value="turismo">Turismo y Paisajes</SelectItem>
                        <SelectItem value="comercial">Proyecto Comercial</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tu proyecto, fechas, ubicación y cualquier detalle relevante..."
                      rows={5}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" />
                    <label htmlFor="privacy" className="text-sm">
                      Acepto la política de privacidad y el tratamiento de mis datos
                    </label>
                  </div>
                  <Button className="w-full" size="lg">
                    Enviar mensaje
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>+56 9 72172846</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span>mcanonesbet@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span>Área de cobertura: sur de Chile</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Área de cobertura</h4>
                <div className="w-full h-64 bg-muted-foreground/10 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Mapa de cobertura</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-serif font-bold text-primary mb-4">El Macún</div>
              <p className="text-muted-foreground mb-4">
                Filmación aérea profesional que transmite calma, belleza y grandeza natural.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection("servicios")}>Filmación Cinematográfica</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("servicios")}>Fotografía Aérea</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("servicios")}>Inspecciones Técnicas</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("servicios")}>Cobertura de Eventos</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection("nosotros")}>Nosotros</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("portafolio")}>Portafolio</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("proceso")}>Proceso</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contacto")}>Contacto</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+56 9 72172846</li>
                <li>mcanonesbet@gmail.com</li>
                <li>Sur de Chile</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 El Macún. Todos los derechos reservados.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <button>Términos de Servicio</button>
              <button>Política de Privacidad</button>
              <button>Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-green-500 hover:bg-green-600"
        >
          <Phone className="w-5 h-5 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  )
}
