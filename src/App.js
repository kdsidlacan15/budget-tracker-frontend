import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
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

      </Router>

    </div>
  );
}

export default App;
