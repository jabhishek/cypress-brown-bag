import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = React.lazy(() => import(/* webpackChunkName: "home-page" */ './container/HomePage'));
const StorePage = React.lazy(() => import(/* webpackChunkName: "store-page" */ './container/StorePage'));
const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "not-found" */ './container/NotFound'));

const LazyRoute = ({ children }) => {
  return <Suspense fallback={<LinearProgress />}>{children}</Suspense>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LazyRoute>
            <Home />
          </LazyRoute>
        </Route>
        <Route path="/store/:code">
          <LazyRoute>
            <StorePage />
          </LazyRoute>
        </Route>
        <Route>
          <LazyRoute>
            <NotFoundPage />
          </LazyRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));
