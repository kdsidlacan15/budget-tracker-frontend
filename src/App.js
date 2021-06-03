import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import ApplicationsProvider from "./contexts/ApplicationContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IncomeSingle from "./pages/IncomeSingle";
import ExpenseSingle from "./pages/ExpenseSingle";
import Profile from "./pages/Profile";
import IncomeTable from "./pages/IncomeTable";
import ExpenseTable from "./pages/ExpenseTable";
import "./App.css";

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
            <Route exact path="/income">
              <IncomePage />
            </Route>
            <Route exact path="/expense">
              <ExpensePage />
            </Route>
            <Route path="/income/:id">
              <IncomeSingle />
            </Route>
            <Route path="/expense/:id">
              <ExpenseSingle />
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
