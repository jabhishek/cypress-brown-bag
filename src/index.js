import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home-page" */ './container/HomePage/HomePage'),
);
const StorePage = React.lazy(() =>
  import(/* webpackChunkName: "store-page" */ './container/StorePage/StorePage'),
);
const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "not-found" */ './container/NotFound'),
);

const LazyLoader = ({ children }) => {
  return <Suspense fallback={<LinearProgress />}>{children}</Suspense>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LazyLoader>
            <Home />
          </LazyLoader>
        </Route>
        <Route path="/store/:code">
          <LazyLoader>
            <StorePage />
          </LazyLoader>
        </Route>
        <Route>
          <LazyLoader>
            <NotFoundPage />
          </LazyLoader>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));
