import React, {Component} from 'react';
import Loader from '../../components/Loader';
import './index.css';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount(){
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response) => response.json())
            .then(json => this.setState({show: json}))
    }

    render() {
        const {show} = this.state;
        const regex = /(<([^>]+)>)/ig;
        console.log(show);
        return(
            
            <div>
                <a className="btn" href="/">Go Back!</a>
                {show === null && <Loader/>}
                {
                    show !== null
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt="show" src={show.image.medium}/>
                        </p>
                        <h1>Summary</h1>
                        <p>{show.summary.replace(regex, '')}</p>
                    </div>
                }
            </div>
        )
        
    }
}
export default SingleSeries;