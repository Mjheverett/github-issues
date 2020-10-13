import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import IssueList from './components/IssueList';

import 'bulma/css/bulma.css';
import './App.css';

import { Title } from 'bloomer';

function App() {
  return (
    <div className="App">
      <Router>
        <IssueList />
      </Router>
    </div>
  );
}

export default App;
