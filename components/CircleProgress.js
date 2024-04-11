import React, { useState, useEffect } from 'react'

import styles from '../styles/CircleProgress.module.css'

function CircleProgress({ percent, skill, isIntersecting }) {
  const [counter, setcounter] = useState(0)

  useEffect(() => {
    const startCircle = () => {
      setTimeout(() => {
        setInterval(() => {
          if(counter === percent) {
            clearInterval()
          } else {
            setcounter(++counter)
            return counter
          }
        }, 10);
      }, 500);
    }

    isIntersecting && startCircle()
  }, [isIntersecting])

  return (
    <div className={styles.container}>
      <div className={styles.skill}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.number}>
              <span>{counter}%</span>
              <span>{skill}</span>
            </div>
          </div>
        </div>

        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
              </defs>
              <circle className={`${styles.circle} ${isIntersecting ? styles[`${skill}`] : ''}`} cx="80" cy="80" r="70" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

export default CircleProgress