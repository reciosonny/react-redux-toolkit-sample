import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  incrementByFive,
  multiplyByTwo,
  multiplyByFive
} from '../../../store/slices/counterSlice';
import styles from './Counter.module.css';

import useCounterStore from '../../../store/hooks/useCounterStore';

export function Counter() {
  const dispatch = useAppDispatch();
  const counterStore = useCounterStore();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    
    return () => {
      
    }
  }, []);
  

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{counterStore.getStoreValue()} amt</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => counterStore.dispatchIncrement()}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByFive())}
        >
          Add Amount by 5
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
