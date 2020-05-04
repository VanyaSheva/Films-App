import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";

import Nav from "../Nav/Nav";

const AsyncHome = lazy(() =>
  import("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const AsyncFilmPage = lazy(() =>
  import("../../pages/FilmPage/FilmPage" /* webpackChunkName: "film-page" */)
);
const AsyncMoviesPage = lazy(() =>
  import(
    "../../pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
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
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/films/:id" component={AsyncFilmPage} />
              <Route path="/films" component={AsyncMoviesPage} />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default App;
