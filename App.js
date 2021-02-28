import logo from './logo.svg';
import './App.css';
import React from 'react';

import HeaderComponent from "./components/HeaderComponent";
import IssueListComponent from "./components/IssueListComponent";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import AboutUsComponent from './components/AboutUsComponent';


function App() {
  return (
    <Router>
    <HeaderComponent/>
    <Route exact path="/home" component={IssueListComponent}/>

    <Route exact path="/about" component={AboutUsComponent}/>
    </Router>
  );
}
export default App;
