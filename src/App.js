import React, {useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MainVisual from './MainPage /MainVisual/MainVisual';
import Users from './MainPage /api/Users';
import Loading from './LoadingScreen/Loading';
 
import Profile from './MainPage /api/screen/Profile';
 
 
 

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
    if(0) {
      return null;
    }
  }, [loading])
  return (
    <>
    {loading === false ? (
    <Router>
       <Switch>
         <Route path="/" component={MainVisual} exact/>
         <Route path="/Users" component={Users} />
         <Route path="/Profile" component={Profile} />
       </Switch>
    </Router>
    ) : (
      <Loading />
    )}
  </>
  )
}

export default App; 