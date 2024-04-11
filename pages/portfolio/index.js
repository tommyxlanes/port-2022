import React from 'react';

import styles from '../../styles/Products.module.css'

import { data, projectTypes } from '../../portfolio-data'
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ projects }) {
    
  return (
    <div className={styles.container}>
        <div className={styles.cardLg}>
            {
                projects.map(project => (
                <div key={project.title} className={styles.imgContainer}>
                    <Link href={`/portfolio/${project.type}`} passHref>
                            <a>
                                <Image 
                                className={styles.portfolioThumb}
                                src={project.image}
                                width='100%' 
                                height='100%' 
                                objectFit='cover' 
                                layout='responsive'
                                alt=''/>
                            </a>
                    </Link>
                </div>
            ))
            }
        </div>
        <div className={styles.cardSm}>
            <h1 className={styles.title}>My Works</h1>
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

export const getStaticProps = () => {
    const projects = projectTypes.map(project => {
        return project
    })

    // const uniqueProjects = projectData.map(pro => pro.type)
    // const projects = Array.from(new Set(uniqueProjects))

    return {
        props: { projects }
    }
}