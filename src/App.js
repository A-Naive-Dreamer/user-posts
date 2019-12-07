import React from 'react';
import './App.css';
import List from './components/List'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/users/:id/pages/:page"
            exact={true}
          >
            <Users />
          </Route>
          <Route
            path="/"
            exact={true}
          >
            <List />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
