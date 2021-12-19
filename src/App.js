import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import NavBar from "./components/NavBar";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </div>
);

export default App;
