import React from 'react'
import { motion } from 'framer-motion'

export default function BoxItems() {

  const boxVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5
      }
    }
  }

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1
      }
    }
  }

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1,2,3].map(boxItem => {
          return (
            <motion.div className="boxItem"
              variants={listVariant}
              initial="hidden"
              animate="visible"
            ></motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
