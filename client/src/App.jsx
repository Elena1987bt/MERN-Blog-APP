import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home/Home';
import './app.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
