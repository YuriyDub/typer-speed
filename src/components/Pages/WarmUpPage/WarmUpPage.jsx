import React, { useEffect, useRef, useState } from 'react';
import { combinedChars } from '../../../constants';
import { getRandomSentence } from '../../../utils';

import styles from './WarmUpPage.module.scss';
import { Char } from '../../Char';
import Typed from 'typed.js';
import { ProgressBar } from '../../UI/ProgressBar/ProgressBar';
import { Popup } from '../../UI/Popup';
import { Button } from '../../UI/Button';
import { Timer } from '../../Timer';

export const WarmUpPage = () => {
  const [userText, setUserText] = useState([]);
  const [randomSentence, setRandomSentence] = useState(getRandomSentence());
  const [speed, setSpeed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isRun, setIsRun] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const keyPressHandler = (e) => {
    const key = e.key;

    if (userText.length < randomSentence.length) {
      setUserText((prev) => {
        if (key === 'Backspace') {
          return prev.slice(0, prev.length - 1);
        }

        const char = combinedChars.find((c) => c === key);

        if (!char) return prev;

        if (!isRun) {
          setStartTime(Date.now());
          setIsRun(true);
        }

        if (randomSentence[userText.length] !== char) {
          setMistakes((prevErrors) => prevErrors + 1);
          return [...prev, { char, isValid: false }];
        } else {
          return [...prev, { char, isValid: true }];
        }
      });
    }
  };

  const getAccuracy = () => {
    const accuracy = Math.floor((1 - mistakes / randomSentence.length) * 100);
    return accuracy || 0;
  };

  const getSpeed = () => {
    const speed = Math.floor((userText.length / ((endTime - startTime) / 1000)) * 60);
    return speed >= 0 ? speed : 0;
  };

  const titleElement = useRef(null);

  const resetAll = () => {
    setUserText([]);
    setMistakes(0);
    setSpeed(0);
    setEndTime(null);
    setStartTime(null);
    setIsRun(false);
    setIsEnded(false);
  };

  const generateNextText = () => {
    setRandomSentence(getRandomSentence());
    resetAll();
  };

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);

    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [userText]);

  useEffect(() => {
    if (userText.length < randomSentence.length) {
      if (userText.length > 0) {
        setEndTime(Date.now());
        setSpeed(getSpeed());
      }
    } else {
      setIsEnded(true);
    }
  }, [userText]);

  useEffect(() => {
    const typed = new Typed(titleElement.current, {
      strings: ['Warm-up your hands'],
      showCursor: false,
      typeSpeed: 10,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.page}>
      <h2 ref={titleElement}></h2>
      <section className={styles.track}>
        <img
          src="/img/background1.png"
          className={styles.background}
          style={isEnded ? { filter: 'blur(4px)' } : {}}
        />
        <Popup isOpen={isEnded}>
          <div className={styles.popup}>
            <Button onClick={resetAll}>
              restart
              <img
                style={{ width: '20px' }}
                src="/img/icons/4213447_arrow_load_loading_refresh_reload_icon.svg"
              />
            </Button>
            <Button onClick={generateNextText}>
              next
              <img style={{ width: '20px' }} src="/img/icons/4829869_arrow_next_right_icon.svg" />
            </Button>
          </div>
        </Popup>
        <div className={styles.textWrapper}>
          <p className={styles.backgroundText} style={isEnded ? { filter: 'blur(4px)' } : {}}>
            {randomSentence}
          </p>
          <p className={styles.frontText} style={isEnded ? { filter: 'blur(4px)' } : {}}>
            {userText.map((p, i) => (
              <Char {...p} key={i} />
            ))}
          </p>
        </div>
      </section>
      <ProgressBar completed={Math.floor((userText.length / randomSentence.length) * 100)} />
      <section className={styles.metrics}>
        <Timer time={endTime ? endTime - startTime : 0} maxTime={60} />
        <div className={styles.speed}>
          <span>{speed}</span>
          <div>c/m</div>
        </div>
        <div className={styles.accuracy}>
          <span>{getAccuracy()}%</span>
        </div>
      </section>
    </div>
  );
};
