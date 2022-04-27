import React from 'react'
import { motion } from 'framer-motion'

export default () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: "400px",
          opacity: 1
        }}
        transition={{
          type: "spring",
          stiffness: 800
        }}
      >
      </motion.div>
    </div>
  )
}
