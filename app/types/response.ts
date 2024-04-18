type ErrorType = {
  message: string;
};

export type ResponseAction<T> = {
  type: 'success' | 'error';
  errorMessage: string | null;
  data: T;
  errors: ErrorType[] | null;
};

export type ResponseLoader<T> = {
  type: 'success' | 'error';
  errorMessage: string | null;
  data: T;
};
