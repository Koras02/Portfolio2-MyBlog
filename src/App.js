import React, {useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignPage from './MainPage /Signup/SignPage';
import MainVisual from './MainPage /MainVisual/MainVisual';
import description from './SubPage/description';
import Users from './MainPage /api/Users';
import LOGIN from './MainPage /api/screen/LOGIN';
import Loading from './LoadingScreen/Loading';
import Profile from './PostPage/Profile';

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
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
         <Route path="/SignPage" component={SignPage} />
         <Route path="/description" component={description} />
         <Route path="/Users" component={Users} />
         <Route path="/Login" component={LOGIN} />
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