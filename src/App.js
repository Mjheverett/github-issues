import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import { Title } from 'bloomer';

// Import my components
import IssueList from './components/IssueList';
import Issue from './components/Issue';

function App() {
  return (
    <div className="App">
      <IssueList />
    </div>
  );
}

export default App;
