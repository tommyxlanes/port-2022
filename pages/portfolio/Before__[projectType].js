import React from 'react';

import styles from '../../styles/Products.module.css'

import { data } from '../../portfolio-data'
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ projects }) {
    console.log(projects);

  return (
    <div className={styles.container}>
        <div className={styles.cardLg}>
            {/* {
                projects.map(img => (
                <div key={img.id} className={styles.imgContainer}>
                    <Link href={`/${}`}>
                        <a>
                            <Image 
                                src={img}
                                width='100%' 
                                height='100%' 
                                objectFit='cover' 
                                layout='responsive'
                                alt=''/>
                        </a>
                    </Link>
                </div>
            ))
            } */}
        </div>
        <div className={styles.cardSm}>
            <h1 className={styles.title}>PLACEHOLDER</h1>
            <p className={styles.desc}>Here are some samples of my works over the years.
            These project are for print media with various types ranging from log designs, 
            menu designs, brochures, and advertisements.
            </p>

            <button className={styles.button}>
                <Link href={'/contact'}>Contact</Link>
            </button>
        </div>
    </div>
  );
}

export const getStaticPaths = async () => {
    const products = data
    const paths = products.map(pro => {
        return {
            params: { projectType: pro.type }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const projects = data.filter(pro => pro.type === params.projectType)

    return {
        props: { projects }
    }
}