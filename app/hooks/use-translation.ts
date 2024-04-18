import { useCallback } from 'react';

import es from '@locales/es/common.json';

export const useTranslation = () => {
  const t = useCallback(
    (key: string, options?: { returnObjects: boolean }): string | object => {
      const translations = es;
      const string = translations[key as keyof typeof translations] || key;

      if (typeof string === 'string') {
        return string;
      }

      if (options?.returnObjects) {
        return string;
      }

      return JSON.stringify(string);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [es]
  );

  return { t };
};
