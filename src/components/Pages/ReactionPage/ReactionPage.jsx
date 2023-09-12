import { useEffect, useState } from 'react';
import { Timer } from '../../Timer';
import { Button } from '../../UI/Button';
import { getRandomChar } from '../../../utils';
import { combinedChars } from '../../../constants';

import styles from './ReactionPage.module.scss';

export const ReactionPage = () => {
  const [time, setTime] = useState(2000);
  const [errors, setErrors] = useState(0);
  const [randomChar, setRandomChar] = useState(getRandomChar());
  const [char, setChar] = useState();
  const [isRun, setIsRun] = useState(false);

  const keyPressHandler = (e) => {
    const key = e.key;
    if (combinedChars.includes(key) && !isRun) {
      setChar(key);

      setIsRun(true);
      setTimeout(() => {
        setChar('');
        setRandomChar(getRandomChar());
        setIsRun(false);
        setTime((prev) => prev / 1.1);
      }, time);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);

    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [char]);

  return (
    <>
      <Timer time={Math.round((time / 1000 + Number.EPSILON) * 100) / 100} maxTime={2} />
      <div className={styles.scene}>
        <img src="/img/background1.png" className={styles.background} />
        <h1 className={styles.backgroundChar}>{randomChar}</h1>
        <h1 className={styles.char}>{char}</h1>
      </div>
    </>
  );
};
