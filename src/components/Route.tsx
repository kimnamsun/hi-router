import { useContext } from 'react';
import { RouteContext } from '../context';

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

export const Route = ({ path, component }: RouteProps) => {
  const { path: currentPath } = useContext(RouteContext);
  return <>{currentPath === path && component}</>;
};
