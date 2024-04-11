import React from 'react';

import styles from '../styles/Services.module.css'

import { data } from '../data';
import Link from 'next/link';
import Image from 'next/image';

export default function Services({services}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>What I can do?</h1>
        <h1 className={styles.subtitle}>Services I can help you with</h1>

        <div className={styles.services}>
            {services.map(service => (
                <Link passHref href={`/products/${service.name}`} key={service.id}>
                    <div className={styles.service}>
                        <div className={styles.desc}>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                        {/* <span className={styles.cat}>{service.title}</span> */}
                        <div className={styles.media}>
                            {service.video ? (
                                <video 
                                    className={styles.video} 
                                    src={`/img/${service.video}`} 
                                    muted
                                    autoPlay 
                                    loop />
                            ) : (
                                <Image 
                                    src={`/img/${service.photo}`} 
                                    width='100%' 
                                    height='100%'
                                    layout='responsive'
                                    objectFit='cover'
                                    alt='' 
                                    />
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
}
