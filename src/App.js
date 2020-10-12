import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import { Title } from 'bloomer';

// Import my components
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <IssueList />
          </Route>
          <Route path="/issue">
            <IssueList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
