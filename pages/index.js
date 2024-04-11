import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

import { data } from '../data'
import CircleProgress from '../components/CircleProgress'

import { useInView } from 'react-intersection-observer'

export default function Home({services}) {
  const { ref: skillRef, inView: skillinView, entry } = useInView({
    threshold: .20,
    triggerOnce: true
  })

  console.log(skillinView);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tom - Vee</title>
        <meta name="description" content="make, create, design" />
      </Head>

      <Intro />

      <Services services={services}/>
      <div ref={skillRef} className={`${styles.skills} ${skillinView ? styles['skills-active'] : ''}`}>
        <CircleProgress percent={90} skill='html' isIntersecting={skillinView} />
        <CircleProgress percent={95} skill='css' isIntersecting={skillinView} />
        <CircleProgress percent={85} skill='react' isIntersecting={skillinView} />
        <CircleProgress percent={85} skill='react' isIntersecting={skillinView} />
        <CircleProgress percent={85} skill='react' isIntersecting={skillinView} />
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  const services = data

  return {
    props: {
      services
    }
  }
}