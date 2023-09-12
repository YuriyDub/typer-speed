import './index.scss';

export const Char = ({ char, isValid }) => {
  return <span data-valid={isValid.toString()}>{char}</span>;
};
