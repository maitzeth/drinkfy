import { twMerge } from 'tailwind-merge';
import classNames, { type ArgumentArray } from 'classnames';

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

export const parseToUrl = (inputString: string) => {
  // Convert the string to lowercase
  let lowercaseString = inputString.toLowerCase();
  // Replace spaces with hyphens
  let convertedString = lowercaseString.replace(/ /g, '-').replace(/_/g, '-');
  return convertedString.trim();
};

export const formatCurrency = (val: number) => {
  // !important HELP NEEDED 
  // This could be a better approach but the prices seems to be integers
  // and right now we dont have the cents (Float) in our database

  // const options2 = { style: 'currency', currency: 'USD' };
  // const numberFormat2 = new Intl.NumberFormat('en-US', options2);
  // return numberFormat2.format(value);

  // For now we are going to use this approach until we have cents in our database
  let value = Math.floor(val);
  const sign = value < 0 ? '-' : '';
  const absoluteValue = Math.abs(value);

  const dollars = Math.floor(absoluteValue / 100);
  const cents = absoluteValue % 100;
  
  return `${sign}$${dollars}.${cents.toString().padStart(2, '0')}`;
};

export const getSlugElements = (slug: string) => {
  const idSlug = slug.split('_').at(0);

  if (idSlug) {
    const parsedId = parseInt(idSlug);
  
    if (isNaN(parsedId)) {
      return null;
    }

    return idSlug;
  }

  return null;
};

export const formatDescriptionToHTML = (description: string) => {
  const paragraphs = description.split('\n');
  return paragraphs.map((paragraph, index) => <p key={index} className="text-sm text-black-2">{paragraph}</p>);
}


