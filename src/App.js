import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Script from "./components/pages/Script";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/reference" exact component={Reference} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/script" exact component={Script} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;
