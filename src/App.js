import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignPage from './MainPage /Signup/SignPage';
import MainVisual from './MainPage /MainVisual/MainVisual';
 

function App() {
  return (
    <Router>
       <Switch>
         <Route path="/" component={MainVisual} exact/>
         <Route path="/SignPage" component={SignPage} />
       </Switch>
    </Router>
  )
}

export default App; 