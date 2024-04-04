import { twMerge } from 'tailwind-merge';
import classNames, { type ArgumentArray } from 'classnames';

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const randomDelay = () => {
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
};

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};
