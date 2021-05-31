import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import IncomePage from './pages/IncomePage'
import ExpensePage from './pages/ExpensePage'

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
       <Router>
        <MainNav />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/income">
            <IncomePage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
        </Switch>


      </Router>

    </div>
  );
}

export default App;
