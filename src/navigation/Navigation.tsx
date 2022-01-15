import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Artists from '../screens/Artists/Artists';
import Events from '../screens/Events/Events';
import Home from '../screens/Home/Home';
import News from '../screens/News/News';
import RankMusic from '../screens/RankMusic/RankMusic';
import Store from '../screens/Store/Store';
import Albums from '../screens/Albums/Albums';

function Navigation(){
    return(
        <Switch>
            {/* everyone */}
            <Route path='/albums'>
                <Albums/>
            </Route>
            <Route path='/store'>
                <Store/>
            </Route>
            <Route path='/rank'>
                <RankMusic/>
            </Route>
            <Route path='/news'>
                <News/>
            </Route>
            <Route path='/events'>
                <Events/>
            </Route>
            <Route path='/artists'>
                <Artists/>
            </Route>
            <Route path='/'>
                <Home/>
            </Route>
        </Switch>
    )
}

export default Navigation;