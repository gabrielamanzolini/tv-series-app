import React, {Component} from 'react';
import Intro from '../../components/Intro';

class AllShows extends Component {
    componentDidMount(){
        fetch(`http://api.tvmaze.com/shows/`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.setState({show: json})
            })
    }
    render () {
        return(
            <div>
                Hello!
            </div>
        )
    }
}

export default AllShows;
