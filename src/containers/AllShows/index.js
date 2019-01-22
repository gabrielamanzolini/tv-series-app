import React, {Component} from 'react';
import Intro from '../../components/Intro';

class AllShows extends Component {
    loadAllShows = e => {
        this.setState().fetch(`https://api.tvmaze.com/shows`).then((response) => response.json()).then(json => this.setState())
    }
}
