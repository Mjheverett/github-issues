import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// Import my components
import IssueList from './components/IssueList';
import Issue from './components/Issue';

import './App.css';

function App() {
  return (
    <div className="App">
      <IssueList />
    </div>
  );
}

export default App;
