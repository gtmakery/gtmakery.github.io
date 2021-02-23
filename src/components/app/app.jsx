import React, {  } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import AppHeader from './app-header';
import AppFooter from './app-footer';

import Landing from 'components/landing';
import Socials from 'components/socials';
import Workshops from 'components/workshops';
import Projects from 'components/projects';
import ExternalRedirect from 'components/externalRedirect';
import { REDIRECTS } from 'utils';

import { nextMeeting } from 'clubData';

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
        <title>The Makery</title>
      </Helmet>
      <AppHeader />
      <main className='flex-grow z-10'>
        <Switch>
          <Route exact path={['/', '/landing']}>
            <Landing />
          </Route>
          <Route path='/socials'>
            <Socials />
          </Route>
          <Route path='/workshops'>
            <Workshops />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/upcoming'>
            <Redirect to={`${nextMeeting.type === "WORKSHOP" ? "workshops" : "projects"}/${nextMeeting.semester}/${nextMeeting.dateString}`} />
          </Route>
          {Object.entries(REDIRECTS).map(([shortName, data]) => {
            const pathNames = [shortName].concat(data.aliases || []).map(path => '/'+path);
            // console.log(pathNames);
            return <Route key={shortName} path={pathNames}>
              <ExternalRedirect target={`https://${data.path}`} />
            </Route>;
          })}
          <Route path='/'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
      <AppFooter />
    </div>
  );
}
