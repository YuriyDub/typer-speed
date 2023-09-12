import styles from './Button.module.scss';

export const Button = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};
