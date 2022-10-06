import React, { useEffect } from 'react';
import { useState } from 'react';
import { PAGES } from '../constants';
import { RouteContext } from '../context';

interface RouterProps {
  children: React.ReactNode;
}

export const Router = ({ children }: RouterProps) => {
  const [path, setPath] = useState(location.pathname);
  const currentElement = React.Children.toArray(children).find((element) => {
    if (!React.isValidElement(element)) {
      return;
    }
    return element.props.path === path;
  });

  useEffect(() => {
    if (!currentElement) {
      setPath(PAGES.NOT_FOUND);
    }

    window.onpopstate = (e) => {
      setPath(e.state);
    };
  }, [path]);

  return (
    <RouteContext.Provider value={{ path, setPath }}>
      {children}
    </RouteContext.Provider>
  );
};
