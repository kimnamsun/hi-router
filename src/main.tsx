import ReactDOM from 'react-dom/client';
import { Router } from './components/Router';
import { Route } from './components/Route';
import { About, Root, NotFound } from './pages';
import { PAGES } from './constants';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Route path={PAGES.ROOT} component={<Root />} />
    <Route path={PAGES.ABOUT} component={<About />} />
    <Route path={PAGES.NOT_FOUND} component={<NotFound />} />
  </Router>
);
