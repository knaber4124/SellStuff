import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import PointOfSale from './components/pages/PointOfSale';
import SalesReporting from './components/pages/SalesReporting';
import Checkout from './components/pages/Checkout';
import InventoryManagement from './components/pages/InventoryManagement';
import InventoryOrdering from './components/pages/InventoryOrdering';
import UserManagement from './components/pages/UserManagement';
import SignUp from './components/pages/SignUp';
import Setup from './components/pages/Setup';
import UsersState from './context/users/UsersState';




function App() {
  return (
    <div className="App">
      <UsersState>
        <BrowserRouter>
          <Header />
          <Fragment>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/setup' element={<Setup />} />
                <Route path='/pointofsale' element={<PointOfSale />} />
                <Route path='/reporting' element={<SalesReporting />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/inventory' element={<InventoryManagement />} />
                <Route path='/ordering' element={<InventoryOrdering />} />
                <Route path='/usermanagement' element={<UserManagement />} />
              </Routes>
            </div>
          </Fragment>
        </BrowserRouter>
        <Footer />
      </UsersState>
    </div >
  );
}

export default App;
