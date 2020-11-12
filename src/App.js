import React, { Component } from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
// import NotFound from "./components/utility/not-found";
import ContactForm from "./containers/contact/contact-form.js";
import AllContacts from "./containers/contact/all-contacts.js";

class App extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} component={ContactForm} />
          <Route exact path={`/all-contacts`} component={AllContacts} />
          {/* <Route path={`*`} component={<h1>Not Found</h1>} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default (App);
