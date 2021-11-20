import React, { useState } from "react";
import { withRouter, Route } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Main from "./components/Main";
import Menu from "./components/Menu";
const App = () => {
  return (
    <div>
      <Route path="/" render={() => <Main />} exact />
      <Route path="/menu" render={() => <Menu />} />
    </div>
  );
};

export default withRouter(App);
