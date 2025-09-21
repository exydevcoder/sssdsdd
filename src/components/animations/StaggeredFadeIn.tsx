"use client"

import React, { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"

interface StaggeredFadeInProps {
  children: React.ReactNode
  staggerDelay?: number
  initialDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  className?: string
}

export default function StaggeredFadeIn({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = "up",
  distance = 20,
  duration = 0.5,
  className = "",
}: StaggeredFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current // Capture the current value
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) { // Use the captured value in cleanup
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Define animation variants based on direction
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      case "none":
        return {}
      default:
        return { y: distance }
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut" as const, // Fixed: Use literal type for ease
      },
    },
  }

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

  // Convert children to array to apply animation to each child
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}