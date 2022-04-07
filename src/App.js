import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Home} from "./pages/Home/Home";
import {Reporting} from "./pages/Reporting/Reporting";
import {Given} from "./pages/Reporting/Given/Given";
import {Remainder} from "./pages/Reporting/Remainder/Remainder";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
            <Route path={"/"} exact component={Login} />
            <Route path={"/home"} component={Home} />
            <Route path={"/reporting"} component={Reporting} />
            <Route path={"/reporting/given"} component={Given} />
            <Route path={"/reporting/remainder"} component={Remainder} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
