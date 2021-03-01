import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavigationBar";
import UnderDevelopment from "./pages/UnderDevelopment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "./components/Menu";

const Routes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Row className="justify-content-md-center ml-0 mr-0">
          <Col lg="2" className="d-none d-lg-block">
            <Menu />
          </Col>
          <Col lg="9" className="mt-5">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <UnderDevelopment />
              </Route>
              <Route exact path="/register">
                <UnderDevelopment />
              </Route>
              <Route exact path="/lootsplit">
                <UnderDevelopment />
              </Route>
              <Route exact path="/notdev">
                <UnderDevelopment />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </>
  );
};

export default Routes;
