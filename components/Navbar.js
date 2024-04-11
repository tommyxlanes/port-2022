import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css'

import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Navbar() {
    const [open, setopen] = useState(false)
    const handleCheck  = () => {
        setopen(!open)
        console.log(open)
    }

    const {asPath} = useRouter()

  return (
    <div className={styles.container}>
        <Link href='/' passHref>
            <Image 
                className={styles.logo}
                src='https://res.cloudinary.com/dehmmknu8/image/upload/v1654105183/my-uploads/logo_iexic7.png' 
                objectFit='cover'
                height={50}
                width={50}
                alt='' />
        </Link>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link passHref href='/about-me' active>
                    <a className={asPath === '/about-me' ? 
                    `${styles.navLink} ${styles.activeLink}` : `${styles.navLink}`}>About Me</a>
                </Link>
            </li>
            <li className={styles.listItem}>
                <Link passHref href='/portfolio'>
                    <a className={asPath === '/portfolio' || asPath.includes('/portfolio') ? 
                    `${styles.navLink} ${styles.activeLink}` : `${styles.navLink}`}>Portfolio</a>
                </Link>
            </li>
            <li className={styles.listItem}>
                <Link passHref href='/web-projects'>
                    <a className={asPath === '/web-projects' ? 
                    `${styles.navLink} ${styles.activeLink}` : `${styles.navLink}`}>Web Projects</a>
                </Link>
            </li>
            <li className={styles.listItem}>
                <Link passHref href='/contact'>
                    <a className={asPath === '/contact' ? 
                    `${styles.navLink} ${styles.activeLink}` : `${styles.navLink}`}>Contact</a>
                </Link>
            </li>
        </ul>
        <input type="checkbox" id="navi-toggle" className={styles.navcheckbox} checked={open} onChange={handleCheck} />
            <label htmlFor='navi-toggle' className={styles.menuBtn} >
                
                <span className={styles.menuBar}>&nbsp;</span>
            </label>
        <ul className={styles.menu} 
            style={{right: open ? '0px' : '-50vw'}} 
            onClick={() => setopen(false)}>
            <li className={styles.menuItem}>
                <Link passHref href='/about-me'>
                    <a className={styles.menuLink}>Design</a>
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link passHref href='/portfolio'>
                    <a className={styles.menuLink}>Production</a>
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link passHref href='/web-projects'>
                    <a className={styles.menuLink}>Development</a>
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link passHref href='/contact'>
                    <a className={styles.menuLink}>Contact</a>
                </Link>
            </li>
        </ul>
    </div>
  );
}
