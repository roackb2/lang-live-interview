import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './features/home/Home'
import Result from './features/result/Result'

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}
