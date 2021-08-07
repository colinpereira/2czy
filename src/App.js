import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Component imports
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/2shop" exact component={Shop} />
          <Route path="/2casestudy" exact component={CaseStudy} />
          <Route path="/2contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
