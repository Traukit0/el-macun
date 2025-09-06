"use client"

import type React from "react"

import { motion } from "framer-motion"

export function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
  className?: string
}) {
  const baseClasses = "relative overflow-hidden rounded-2xl font-semibold shadow-lg transition-all duration-300"

  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-sky-600 text-white hover:shadow-cyan-500/50",
    secondary: "bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:shadow-slate-500/50",
    outline: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-cyan-500/30",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </motion.button>
  )
}
