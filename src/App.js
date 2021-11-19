import React, { useState } from "react";
import { withRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
const App = () => {
  const [Kuji, setKuji] = useState("");
  // const [Kujies, setKujies] = useState([]);
  return (
    <div>
      <Route path="/" render={() => <Main />} exact />
      <Route path="/menu" render={() => <Menu />} />
    </div>
  );
};

export default withRouter(App);
