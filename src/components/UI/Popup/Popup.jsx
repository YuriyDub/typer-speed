import styles from './Popup.module.scss';

export const Popup = ({ children, isOpen }) => {
  return <>{isOpen ? <div className={styles.popup}>{children}</div> : null}</>;
};
