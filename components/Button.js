import React from 'react';

import styles from '../styles/Button.module.css'

export default function Button({btn}) {

  return (
    <button className={styles.button}>{btn}</button>
  );
}
