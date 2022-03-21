import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {Reporting} from "./pages/Reporting";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
            <Route path={"/"} exact component={Login} />
            <Route path={"/home"} exact component={Home} />
            <Route path={"/reporting"} exact component={Reporting} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
