import React from 'react';
import './App.css';
import List from './components/List'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:id/pages/:page">
            <Users />
          </Route>
          <Route path="/" exact={true}>
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
