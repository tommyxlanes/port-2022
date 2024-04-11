import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.cardL}>
          <h1 className={styles.title}>TOMMY VONG.</h1>
          <h1 className={styles.linkTitle}>
            <Link className={styles.link} passHref href='/contact'>
              <a>
                WORK WITH ME <span className={styles.titleArrow}>&rarr;</span>
              </a>
              
            </Link>
          </h1>
        </div>
        <div className={styles.cardS}>
          <div className={styles.cardItem}>
            LOS ANEGELS, CA
          </div>
          <div className={styles.cardItem}>
            TommyVong@test.com
          </div>
        </div>
        <div className={styles.cardS}>
          <div className={styles.cardItem}>
            @ 2022 TOMMY_VONG.
            <br />
            ALL RIGHTS RESERVED
          </div>
        </div>
    </div>
  );
}
