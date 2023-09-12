import { useState } from 'react';

import styles from './Toggler.module.scss';

export const Toggler = ({ leftSideContent, rightSideContent }) => {
  const [isActive, setIsActive] = useState(false);

  const buttonClick = () => setIsActive((prev) => !prev);

  return (
    <button onClick={buttonClick} className={styles.toggler}>
      <div className={isActive ? styles.disable : styles.leftSide}>{leftSideContent}</div>
      <div className={isActive ? styles.leftSide : styles.disable}>{rightSideContent}</div>
    </button>
  );
};
