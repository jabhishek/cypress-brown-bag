import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home-page" */ "./container/HomePage")
);
const StorePage = React.lazy(() =>
  import(/* webpackChunkName: "store-page" */ "./container/StorePage")
);
const ListPage = React.lazy(() =>
  import(/* webpackChunkName: "list-page" */ "./container/ListPage")
);
const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "not-found" */ "./container/NotFound")
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<LinearProgress />}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/store/:code">
          <Suspense fallback={<LinearProgress />}>
            <StorePage />
          </Suspense>
        </Route>
        <Route path="/list">
          <Suspense fallback={<LinearProgress />}>
            <ListPage />
          </Suspense>
        </Route>
        <Route>
          <Suspense fallback={<LinearProgress />}>
            <NotFoundPage />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("app"));
