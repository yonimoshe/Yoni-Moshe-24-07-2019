import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import HomeGrid from '../containers/HomeGrid/HomeGrid';
import Favorites from '../containers/Favorites/Favorites';


const layout = (props) => (
        <div className="container-fluid">
           <div className="row">
            <div className="col-md-12 p-0">
              <Navigation />
                <Switch>
                 <Route path='/Favorites' component={Favorites} />
                 <Route path='/' component={HomeGrid} />
                </Switch>
             </div>
           </div>
        </div>
);

export default layout;
