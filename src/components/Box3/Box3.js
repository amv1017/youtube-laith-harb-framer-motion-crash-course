import React from 'react'
import { motion } from 'framer-motion'

export default function Box3() {

  const boxVariant = {
    pointA: {
      x: 100, 
      scale: 1.2
    },
    pointB: {
      x: 600,
      scale: 0.3,
      backgroundColor: "#4682b4",
      transition: {
        delay: 1,
        duration: 2,
        ease: [0.075, 0.82, 0.165, 1],
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="pointA"
        animate="pointB"
      >
      </motion.div>
    </div>
  )
}
