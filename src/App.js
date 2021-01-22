import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const redirects = {
  bluejeans: "https://bluejeans.com/934369596",
  rentals: "https://gatech.co1.qualtrics.com/jfe/form/SV_6xo6Al2j4TEWru6"
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Object.entries(redirects).map(([path, target]) => {
            return <Redirect from={`/${path}`} to={{ pathname: target }} target="_blank" />
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
