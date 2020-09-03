import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />

        </Switch>
        
      </main>
    </BrowserRouter>
  );
}

export default App;
