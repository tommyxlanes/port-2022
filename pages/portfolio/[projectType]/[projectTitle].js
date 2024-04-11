import React from 'react';

import styles from '../../../styles/Products.module.css'

import { data } from '../../../portfolio-data'
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ project }) {
    console.log(project);

  return (
    <div className={styles.container}>
        <div className={styles.cardLg}>
            {
                project.images.map(img => (
                    <div key={project.id} className={styles.portfolioImgContainer}>
                                <Image 
                                    src={img.url}
                                    width='100%' 
                                    height='100%' 
                                    objectFit='cover' 
                                    layout='responsive'
                                    alt=''/>
                    </div>
            ))
            }
        </div>
        <div className={styles.cardSm}>
            <h1 className={styles.title}>{project.title}</h1>
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
    // const products = data
    const paths = data.map(pro => {
        return {
            params: { 
                projectType: pro.type,
                projectTitle: pro.title
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const project = data.find(pro => pro.title === params.projectTitle)

    return {
        props: { project }
    }
}