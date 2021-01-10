import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Main from './MainPage /Main';
import SignPage from './MainPage /Signup/SignPage';
 

function App() {
  return (
    <Router>
       <Switch>
         <Route path="/" component={Main} exact/>
         <Route path="/SignPage" component={SignPage} />
       </Switch>
    </Router>
  )
}

export default App; 