import { useEffect, useRef, useState } from 'react';
import { Timer } from '../../Timer';
import { Button } from '../../UI/Button';
import { getRandomChar } from '../../../utils';
import { combinedChars } from '../../../constants';

import styles from './ReactionPage.module.scss';
import Typed from 'typed.js';

const ROUND_TIME = 60000;

export const ReactionPage = () => {
  const [randomChar, setRandomChar] = useState(getRandomChar());
  const [char, setChar] = useState('');
  const [time, setTime] = useState(ROUND_TIME);
  const [isRun, setIsRun] = useState(false);
  const [points, setPoints] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  const resetAll = () => {
    setRandomChar(getRandomChar());
    setChar('');
    setTime(ROUND_TIME);
    setIsRun(false);
    setPoints(0);
    setMistakes(0);
  };

  const keyPressHandler = (e) => {
    if (isRun) {
      const key = combinedChars.find((c) => c === e.key);

      if (!key) return;

      setChar(key);
      setIsRun(false);

      setTimeout(() => {
        if (key !== randomChar) {
          setMistakes((prev) => prev + 1);
        } else {
          setPoints((prev) => prev + 1);
        }

        setIsRun(true);
        setChar('');
        setRandomChar(getRandomChar());
      }, 500);
    }
  };

  useEffect(() => {
    let timer;

    if (isRun) {
      timer = setInterval(() => {
        if (isRun) {
          setTime((prevTime) => prevTime - 10);
        }
      }, 10);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isRun]);

  useEffect(() => {
    if (time === 0) {
      resetAll();
    }
  }, [time]);

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);

    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [isRun]);

  const titleElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleElement.current, {
      strings: ['Catch as many letters as possible in 60 seconds'],
      showCursor: false,
      typeSpeed: 10,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <h2 ref={titleElement}></h2>
      <div className={styles.metrics}>
        <div className={styles.points}>
          <span>{points}</span>
          <div>p</div>
        </div>
        <Timer time={time} maxTime={ROUND_TIME / 1000} />
        <div className={styles.mistakes}>
          <span>{mistakes}</span>
          <div>mis</div>
        </div>
      </div>
      <div className={styles.scene}>
        <img src="/img/background1.png" className={styles.background} />
        <h1 className={styles.backgroundChar}>{randomChar}</h1>
        <h1 className={styles.char}>{char}</h1>
        <Button
          className={styles.startButton}
          onClick={() => {
            setIsRun(true);
          }}>
          start
        </Button>
      </div>
    </>
  );
};
