import React from 'react';
import Button from '../components/Button';
import Circle from '../components/Circle';

import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <form className={styles.form}>
            <input className={styles.inputSm} placeholder='Username'/>
            <input className={styles.inputSm} placeholder='Phone'/>
            <input className={styles.inputSm} placeholder='Email'/>
            <input className={styles.inputLg} placeholder='Subject'/>
            <textarea className={styles.textArea} placeholder='Message' rows="6"></textarea>
            <Button btn='Submit'/>
        </form>
    </div>
  );
}
