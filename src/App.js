import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchTicket from "./components/SearchTicket";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import CarList from "./components/CarList";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/confirm/:confirmationCode" component={Welcome} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/carlist" component={CarList} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

const showContentMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }

  return <Switch>{result}</Switch>;
};

export default App;
