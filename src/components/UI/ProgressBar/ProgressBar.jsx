import styles from './ProgressBar.module.scss';

export const ProgressBar = ({ completed }) => {
  return (
    <div className={styles.body}>
      <div className={styles.bar} style={{ width: `${completed}%` }}>
        {completed ? <span className={styles.label}>{`${completed}%`}</span> : null}
      </div>
    </div>
  );
};
