import React from 'react';
import styles from './index.module.less';

export interface BatteryProps {

}

const Battery = (props: BatteryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.battery}></div>
      <div className={styles['battery-copy']}>
        <div className={styles['g-wave']}></div>
        <div className={styles['g-wave']}></div>
        <div className={styles['g-wave']}></div>
      </div>
    </div>
  )
}

export default Battery;