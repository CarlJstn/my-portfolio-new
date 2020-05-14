import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
