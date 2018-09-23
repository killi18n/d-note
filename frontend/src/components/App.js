import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound } from "pages";
import BaseContainer from "containers/BaseContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route component={NotFound} />
        </Switch>
        <BaseContainer />
      </div>
    );
  }
}

export default App;
