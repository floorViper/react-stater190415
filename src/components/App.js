import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import importedComponent from 'react-imported-component';

import Main from "pages/Main";
import About from "pages/About";
// import Loading from "./Loading";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} /> */}
          {/* <Route component={AsyncNoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
