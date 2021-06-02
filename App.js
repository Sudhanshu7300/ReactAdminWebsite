import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';


function App() {
  return (
    
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Signin" component={Signin}/>
        <Route path="/Signup" component={Signup}/>
      </Switch>
    </Router>
  
    </div>
    
  );
}

export default App;
