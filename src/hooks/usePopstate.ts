import { useEffect } from 'react';

export const usePopState = (
  callback: (e: PopStateEvent) => void,
  // TODO: unknown 제거
  state: unknown
) => {
  useEffect(() => {
    window.onpopstate = (e) => {
      callback(e.state);
    };
  }, [callback, state]);
};
