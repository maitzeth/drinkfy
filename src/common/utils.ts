import { twMerge } from 'tailwind-merge';
import classNames, { type ArgumentArray } from 'classnames';

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

export const parseToUrl = (inputString: string) => {
  // Convert the string to lowercase
  let lowercaseString: string = inputString.toLowerCase();
  // Replace spaces with hyphens
  let convertedString: string = lowercaseString.replace(/ /g, '-');
  return convertedString.trim();
}

export const formatCurrency = (value: number) => {
  // !important HELP NEEDED 
  // This could be a better approach but the prices seems to be integers
  // and right now we dont have the cents (Float) in our database

  // const options2 = { style: 'currency', currency: 'USD' };
  // const numberFormat2 = new Intl.NumberFormat('en-US', options2);
  // return numberFormat2.format(value);

  // For now we are going to use this approach until we have cents in our database
  const dollars: number = Math.floor(value / 100);
  const cents: number = value % 100;
  return `$${dollars}.${cents.toString().padStart(2, '0')}`;
}
