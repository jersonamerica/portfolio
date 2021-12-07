import { Switch, Route } from "react-router-dom";
import Music from "components/music";
import Home from "components/home";
import Playground from "components/playground";

const PagesRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/music">
        <Music />
      </Route>
      <Route exact path="/playground">
        <Playground />
      </Route>
      <Route component={() => <div>Not found</div>} />
    </Switch>
  );
};

export default PagesRouter;
