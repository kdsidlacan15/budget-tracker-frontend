import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import ApplicationsProvider from "./contexts/ApplicationContext";
import IncomeTransactionListPage from "./pages/IncomeTransactionListPage";
import ExpenseTransactionListPage from "./pages/ExpenseTransactionListPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoggedUserPage from "./pages/LoggedUserPage";
import IncomeUpdate from "./pages/IncomeUpdate";
import Profile from "./pages/Profile";
import IncomeTable from "./pages/IncomeTable";
import ExpenseTable from "./pages/ExpenseTable";

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
            <Route path="/LoggedUserPage">
              <LoggedUserPage />
            </Route>
            <Route path="/IncomeUpdate">
              <IncomeUpdate />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/IncomeTable">
              <IncomeTable />
            </Route>
            <Route path="/ExpenseTable">
              <ExpenseTable />
            </Route>
          </Switch>
        </Router>
      </ApplicationsProvider>
    </div>
  );
}

export default App;
