import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './pages/Home';
import Payment from './pages/Payment';
//styles
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pay" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
