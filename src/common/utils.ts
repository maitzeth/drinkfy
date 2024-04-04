import { twMerge } from 'tailwind-merge';
import classNames, { type ArgumentArray } from 'classnames';

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};
