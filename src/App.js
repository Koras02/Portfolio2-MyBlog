import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages';
 

function App() {
  return (
    <>
    <Router>
       <Switch>
         <Route path="/Portfolio2-MyBlog" component={Home} exact/>
       </Switch>
    </Router>
    </>
  )
};
 
export default App; 