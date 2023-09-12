import styles from './Timer.module.scss';

export const Timer = ({ time, maxTime }) => {
  const normalizedTime = time / maxTime;

  return (
    <div className={styles.clock}>
      <img
        className={styles.arrow}
        style={{ transform: `rotate(${normalizedTime * 180 - 90}deg)` }}
        src="../img/arrow.png"
        alt="arrow"
      />
      <span>{time}s</span>
    </div>
  );
};
