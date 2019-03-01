import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import QuestionScreen from './screens/QuestionScreen';
import Dashboard from './screens/Dashboard';

import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/question" component={QuestionScreen}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
