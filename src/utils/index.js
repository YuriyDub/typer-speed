import { sentences } from '../constants';
import { combinedChars } from '../constants';

export const getRandomSentence = () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
};

export const getRandomChar = () => {
  const randomIndex = Math.floor(Math.random() * combinedChars.length);
  return combinedChars[randomIndex];
};
