import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import LogIn from './components/pages/LogIn'
import UsersState from './context/users/UsersState';


function App() {
  return (
    <div className="App">
      <UsersState>
        <Header />
        <Router>
          <Fragment>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='login' element={<LogIn />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </UsersState>
      <Footer />
    </div >
  );
}

export default App;
