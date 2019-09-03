import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'normalize.css/normalize.css';
import styles from './App.module.css';
import Home from './Home';
import TabComponent from './TabComponent';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav className={styles.nav}>
          <NavLink exact activeClassName={styles.activeNavLink} to="/">Instructions</NavLink>
          <NavLink exact activeClassName={styles.activeNavLink} to="/tab-component">Your work</NavLink>
        </nav>

        <Route
          exact
          path="/tab-component"
          component={TabComponent}
        />

        <Route
          exact
          path="/"
          component={Home}
        />
      </Router>
    </div>
  );
}

export default App;
