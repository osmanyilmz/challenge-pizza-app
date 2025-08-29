import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/secenekler" component={Main} />
        <Route path="/success" component={Success} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
