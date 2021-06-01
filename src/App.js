import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import IncomePage from './pages/IncomePage'
import ExpensePage from './pages/ExpensePage'
import ApplicationsProvider from './contexts/ApplicationContext'
import IncomeTransactionListPage from './pages/IncomeTransactionListPage'
import ExpenseTransactionListPage from './pages/ExpenseTransactionListPage'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <ApplicationsProvider>
      
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
          <Route path="/IncomeTransactionListPage">
            <IncomeTransactionListPage />
          </Route>
          <Route path="/ExpenseTransactionListPage">
            <ExpenseTransactionListPage />
          </Route>
        </Switch>


      </Router>
    </ApplicationsProvider>

    </div>
  );
}

export default App;
