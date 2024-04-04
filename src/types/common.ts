export type withClassName<T = unknown> = T & {
  className?: string;
};

export type Maybe<T> = T | null;

export type FetchError = {
  error: string;
};
