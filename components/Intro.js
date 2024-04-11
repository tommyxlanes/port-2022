import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import styles from '../styles/Intro.module.css'
import Circle from './Circle';

export default function Intro() {
    const [word, setword] = useState('Graphic Designer')
    const [words, setwords] = useState(['Graphic Designer', 'Web Developer', 'Creative Director'])
    const [interval, setinterval] = useState(0)

    useEffect(() => {
      const wordIterator = (i) => {
        if(words.length > i) {
            setword(words[i])
            setinterval(++i)
        } else if(words.length == i) {
            console.log(i);
            setinterval(0)
            setword(words[0])
        }
      }

      setTimeout(() => {
          wordIterator(interval)
      }, 1500);
    }, [word, interval])

  return (
    <div className={styles.container}>
        
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>TOMMY VONG</span> {word}
            </h1>
            <p className={styles.description}>
                I'm Tommy, a graphic designer/web developer living and working in beautiful Los Angeles!
                I am currently focused more on graphic designs for digital and print marketing and I have 
                many years working with brochures, menus, advertisements, as well as solid knowledge of 
                web designs and full stack development.
            </p>
            <button className={styles.button}>Discover</button>
        </div>
        <div className={styles.card}>
            <Image 
                src='/img/portrait.png' 
                width='100%' 
                height='100%' 
                layout='fill' 
                objectFit='cover'
                alt='' />
        </div>
    </div>
  );
}
