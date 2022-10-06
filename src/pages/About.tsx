import { PAGES } from '../constants';
import { useRouter } from '../hooks/useRouter';

export const About = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>About</h1>
      <div className="center">
        <button onClick={() => push(PAGES.ROOT)}>Root</button>
      </div>
    </>
  );
};
