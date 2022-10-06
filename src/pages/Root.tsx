import { PAGES } from '../constants';
import { useRouter } from '../hooks/useRouter';

export const Root = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>Root</h1>
      <div className="center">
        <button onClick={() => push(PAGES.ABOUT)}>About</button>
      </div>
    </>
  );
};
