import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDefaultAnimation = (delay: number) => ({
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay },
});

export const parseUrl = (url: string): URL | boolean => {
  try {
    return new URL(url);
  } catch (err) {
    return false;
  }
};
