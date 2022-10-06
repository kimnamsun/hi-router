import { createContext } from 'react';

const { pathname: path } = window.location;

export const RouteContext = createContext({
  path,
  setPath: (path: string) => {},
});
