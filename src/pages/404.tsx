import { PAGES } from '../constants';
import { useRouter } from '../hooks/useRouter';

export const NotFound = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>NotFound</h1>
      <div className="center">
        <button onClick={() => push(PAGES.ROOT)}>Root</button>
      </div>
    </>
  );
};
