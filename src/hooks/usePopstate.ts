import { useEffect } from 'react';

export const usePopState = (
  callback: (e: PopStateEvent) => void,
  state: unknown
) => {
  useEffect(() => {
    window.onpopstate = (e) => {
      callback(e.state);
    };
  }, [callback, state]);
};
