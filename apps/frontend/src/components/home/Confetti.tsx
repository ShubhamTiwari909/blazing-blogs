'use client'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

const Confetti = () => {
  useEffect(() => {
    const bursts = [
      { x: 0.25, y: 0.25 }, // Top left
      { x: 0.75, y: 0.25 }, // Top right
      { x: 0.5, y: 0.5 }, // Center
      { x: 0.25, y: 0.75 }, // Bottom left
      { x: 0.75, y: 0.75 }, // Bottom right
    ]

    bursts.forEach((burst, index) => {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 360,
          angle: 90,
          gravity: 0.8,
          ticks: 200,
          colors: ['#00b894', '#0984e3', '#6c5ce7', '#e84393', '#fd79a8'],
          shapes: ['circle', 'square', 'star'],
          drift: 0.3,
          decay: 0.92,
          startVelocity: 25,
          origin: {
            x: burst.x,
            y: burst.y,
          },
        })
      }, index * 100)
    })
  }, [])
  return null
}

export default Confetti
