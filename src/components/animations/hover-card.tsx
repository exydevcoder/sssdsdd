"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  hoverElevation?: boolean
}

export default function HoverCard({
  children,
  className = "",
  hoverScale = 1.02,
  hoverElevation = true,
}: HoverCardProps) {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: hoverScale,
              ...(hoverElevation && {
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }),
            }
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
