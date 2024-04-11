import React from 'react';

import styles from '../styles/Products.module.css'

import Link from 'next/link';
import Progressbar from '../components/Progressbar';

export default function Product() {
    
  return (
    <div className={styles.container}>
        <div className={styles.cardLg}>
            <div className={styles.progressBars}>
                <Progressbar skill='html' percent='95' />
                <Progressbar skill='css' percent='95' />
                <Progressbar skill='javascript' percent='90' />
                <Progressbar skill='react' percent='90' />
                <Progressbar skill='node' percent='85' />
            </div>
        </div>
        <div className={styles.cardSm}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati animi 
                iusto suscipit iste. Assumenda delectus qui, voluptate veniam nulla, voluptas cupiditate 
                esse dignissimos saepe obcaecati nemo vero recusandae quas.
            </p>

            <button className={styles.button}>
                <Link href={'/contact'}>Contact</Link>
            </button>
        </div>
    </div>
  );
}