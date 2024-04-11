import React from 'react'

import styles from '../styles/Progressbar.module.css'

function Progressbar({ skill, percent }) {
  return (
    <div className={styles['progress-bar']}>
        <p className={styles['progress-title']}>{skill}</p>
        <div className={styles['progress-container']}>
            <p className={styles['progress-text']}>{percent}%</p>
            <div className={styles['progress']}>
                <span className={styles[`${skill}`]}></span>
            </div>
        </div>
    </div>
  )
}

export default Progressbar