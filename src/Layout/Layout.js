import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import HomeGrid from '../containers/HomeGrid/HomeGrid';
import Favorites from '../containers/Favorites/Favorites';


const layout = (props) => (
        <header>
            <Navigation />
              <Switch>
               <Route path='/Favorites' component={Favorites} />
               <Route path='/' component={HomeGrid} />
              </Switch>
        </header>
);

export default layout;
