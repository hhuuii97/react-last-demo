import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./Router";

import LKHeader from "./Components/Header/LKHeader";
import LKAside from "./Components/Aside/LKAside";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <LKHeader />
            <div className="main">
              <LKAside />
              {routes.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route
                      key={key}
                      exact
                      path={route.path}
                      render={props => <route.component {...props} />}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={key}
                      path={route.path}
                      render={props => <route.component {...props} />}
                    />
                  );
                }
              })}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
