import React, {  } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import AppHeader from './app-header';
import AppFooter from './app-footer';

import About from 'components/about';
import Landing from 'components/landing';
import Bluejeans from 'components/bluejeans';
import Rentals from 'components/rentals';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

require('./hacks');


export default function App(props) {

  return (
    <div className='h-full flex flex-col' id='app'>
      <Helmet>
        <title>Mungus IRL</title>
      </Helmet>
      <AppHeader />
      <main className='flex-grow z-10'>
        <Switch>
          <Route exact path={['/', '/landing']}>
            <Landing />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/bluejeans'>
            <Bluejeans />
          </Route>
          <Route path={['/rental', '/rentals']}>
            <Rentals />
          </Route>
        </Switch>
      </main>
      <AppFooter />
    </div>
  );
}
