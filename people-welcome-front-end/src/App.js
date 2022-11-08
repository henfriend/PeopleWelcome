import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage'
import HomePage from './HomePage';
import MyAccount from './MyAccount';
import Notifications from './Notifications';
import Settings from './Settings';
import TopNavBar from './TopNavBar';

function App() {
  return (
    <Router>
      <div className="App">
          <TopNavBar/>
          <div className='content'>
            <Routes>
              <Route path='/homepage' element={ <HomePage/> } />
              <Route path='/notifications' element={ <Notifications/> } />
              <Route path='/foryou'/>
              <Route path='/createpost'/>
              <Route path='/messages'/>
              <Route path='/settings' element={ <Settings/> } />
              <Route path='/myaccount' element={ <MyAccount/> } />
              <Route path='/' element={ <LoginPage/> }/>
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
