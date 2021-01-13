import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignPage from './MainPage /Signup/SignPage';
import MainVisual from './MainPage /MainVisual/MainVisual';
import description from './SubPage/description';
 

function App() {
  return (
    <Router>
       <Switch>
         <Route path="/" component={MainVisual} exact/>
         <Route path="/SignPage" component={SignPage} />
         <Route path="/description" component={description} />
       </Switch>
    </Router>
  )
}

export default App; 