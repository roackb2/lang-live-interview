import React from 'react';
import styles from './Counter.module.scss';
import moment from 'moment'

interface CounterProp {
  secondsLeft: number
}


function Counter(props: CounterProp) {
  return (
    <div className={styles.counter}>
      <div className={styles.timeLeft}>
        { moment.unix(props.secondsLeft).format('mm:ss') }
      </div>
    </div>
  )
}

export default Counter;
