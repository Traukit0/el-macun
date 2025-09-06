"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function ModernCard({
  children,
  className = "",
  hover3D = true,
}: {
  children: ReactNode
  className?: string
  hover3D?: boolean
}) {
  return (
    <motion.div
      whileHover={
        hover3D
          ? {
              scale: 1.03,
              rotateX: 2,
              rotateY: -2,
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }
          : { scale: 1.02 }
      }
      className={`rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
