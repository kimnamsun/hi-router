export const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, '', path);
    dispatchEvent(new PopStateEvent('popstate', { state: path }));
  };
  return { push };
};
