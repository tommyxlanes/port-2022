import React from 'react';

import styles from '../../styles/Products.module.css'

import { data } from '../../portfolio-data'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Progressbar from '../../components/Progressbar';

export default function Product({ project }) {

    console.log(project);
    
  return (
    <div className={styles.container}>
        <div className={styles.cardLg}>
            {product.name === 'about-me' ? <div className={styles.progressBars}>
                <Progressbar skill='html' percent='95' />
                <Progressbar skill='css' percent='95' />
                <Progressbar skill='javascript' percent='90' />
                <Progressbar skill='react' percent='90' />
                <Progressbar skill='node' percent='85' />
            </div> : 
             product.images.map(img => (
                <div key={img.id} className={styles.imgContainer}>
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
            <h1 className={styles.title}>{product.title.replace('-', ' ')}</h1>
            <p className={styles.desc}>{product.longDesc}</p>

            <button className={styles.button}>
                <Link href={'/contact'}>Contact</Link>
            </button>
        </div>
    </div>
  );
}

export const getStaticPaths = async () => {
    const projects = data
    const paths = projects.map(project => {
        return {
            params: { projectsName: project.name }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const project = data.filter(project => project.name === params.projectsName)

    return {
        props: { project }
    }
}