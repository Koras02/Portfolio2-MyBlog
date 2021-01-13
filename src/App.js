import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignPage from './MainPage /Signup/SignPage';
import MainVisual from './MainPage /MainVisual/MainVisual';
import description from './SubPage/description';
import Users from './MainPage /api/Users';
import LOGIN from './MainPage /api/screen/LOGIN';
 

function App() {
  return (
    <>
    <Router>
       <Switch>
         <Route path="/" component={MainVisual} exact/>
         <Route path="/SignPage" component={SignPage} />
         <Route path="/description" component={description} />
         <Route path="/Users" component={Users} />
         <Route path="/Login" component={LOGIN} />
       </Switch>
    </Router>
  </>
  )
}

export default App; 