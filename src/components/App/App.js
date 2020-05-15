import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Spinner from "../../helpers/Loader";
import Nav from "../Nav/Nav";

const AsyncHome = lazy(() =>
  import("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const AsyncSerials = lazy(() =>
  import(
    "../../pages/SerialsPage/SerialsPage" /* webpackChunkName: "serials-page" */
  )
);
const AsyncCartoons = lazy(() =>
  import(
    "../../pages/CartoonsPage/CartoonsPage" /* webpackChunkName: "cartoons-page" */
  )
);
const AsyncFilmPage = lazy(() =>
  import("../../pages/FilmPage/FilmPage" /* webpackChunkName: "film-page" */)
);
const AsyncMoviesPage = lazy(() =>
  import(
    "../../pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);
const AsyncSerialPage = lazy(() =>
  import(
    "../../pages/SerialPage/SerialPage" /* webpackChunkName: "serial-page" */
  )
);

const AsyncCartoonPage = lazy(() =>
  import(
    "../../pages/CartoonPage/CartoonPage" /* webpackChunkName: "cartoon-page" */
  )
);

class App extends Component {
  render() {
    return (
      <div className={styles.Wrapper}>
        <header className={styles.Header}>
          <Nav />
        </header>
        <main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/films/:id" component={AsyncFilmPage} />
              <Route path="/films" component={AsyncMoviesPage} />
              <Route path="/serials/:id" component={AsyncSerialPage} />
              <Route path="/serials" component={AsyncSerials} />
              <Route path="/cartoons/:id" component={AsyncCartoonPage} />
              <Route path="/cartoons" component={AsyncCartoons} />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default App;
