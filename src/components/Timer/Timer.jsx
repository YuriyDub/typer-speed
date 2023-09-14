import styles from './Timer.module.scss';

export const Timer = ({ time, maxTime }) => {
  time = Math.round((time / 1000 + Number.EPSILON) * 100) / 100;
  const normalizedTime = time / maxTime;

  return (
    <div className={styles.clock}>
      <img
        className={styles.arrow}
        style={{ transform: `rotate(${normalizedTime * 180 - 90}deg)` }}
        src="../img/arrow.png"
        alt="arrow"
      />
      <span>{time}</span>
    </div>
  );
};
