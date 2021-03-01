import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

//components
import Home from './pages/Home';
import Payment from './pages/Payment';
//styles
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pay" component={Payment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
