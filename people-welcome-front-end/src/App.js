import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TopNavBar from './TopNavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar/>
        <div className='content'>
          <Switch>
            <Route path='/'>

            </Route>
            <Route path='/notifications'>

            </Route>
            <Route path='/foryou'>

            </Route>
            <Route path='/createpost'>

            </Route>
            <Route path='/messages'>

            </Route>
            <Route path='/settings'>

            </Route>
            <Route path='/myaccount'>

            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
