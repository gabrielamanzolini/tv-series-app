import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../containers/Series'
import SingleSeries from '../../containers/SingleSeries'
import AllShows from '../../containers/AllShows';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series}/>
        <Route path='/series/:id' component={SingleSeries}/>
        <Route path = '/all-shows' component={AllShows}/>
    </Switch>
)

export default Main;