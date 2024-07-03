import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'; // Adjust the path according to your project structure

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
