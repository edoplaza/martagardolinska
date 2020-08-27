import React from 'react';
import MainContextProvider from './contexts/MainContext';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Biography from './components/Biography';
import Calendar from './components/Calendar';
import Press from './components/Press';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Photos from './components/Photos';


const App = props => {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <div>
          <Header />
          <div className="route-container">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/biography' exact component={Biography} />
              <Route path='/calendar' exact component={Calendar} />
              <Route path='/press' exact component={Press} />
              <Route path='/photos' exact component={Photos} />
              <Route path='/videos' exact component={Videos} />
              <Route path='/contact' exact component={Contact} />

            </Switch>
          </div>
          <Footer />
        </div>
      </MainContextProvider>
    </BrowserRouter>
  )
}

export default App;
