import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Graduation from "../pages/Graduation";
import Wedding from "../pages/Wedding";
import Gathering from "../pages/Gathering";

const RoutesPath = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/gathering">
        <Gathering />
      </Route>
    </Switch>
  );
};

export default RoutesPath;
