import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages';
import SubVisual from './SubPage';
 

function App() {
  return (
    <>
    <Router>
       <Switch>
         <Route path="/Portfolio2-MyBlog" component={Home} exact/>
         <Route path="/Portfolio2-MyBlog/SubVisual" component={SubVisual} />
       </Switch>
    </Router>
    </>
  )
};
 
export default App; 