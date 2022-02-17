import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Fragment>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />

            </Routes>
          </div>
        </Fragment>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
