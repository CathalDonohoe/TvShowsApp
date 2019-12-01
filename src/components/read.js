import React from 'react'
import TvShows from './tvshows';
import axios from 'axios';


class Read extends React.Component {

    //displays the tv show items
    state = {
        tvshows: []
    };



    componentDidMount() {
        axios.get('http://localhost:4000/api/tvshows') //the url of the server
            .then((response) => {
                this.setState({ tvshows: response.data.tvshows })//displays data
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const mystyle = {
            color: "Red",
            backgroundColor: "Black",
            padding: "50px",
            fontFamily: "Impact"
        };

        //sets background image and colour
        return (
            <div style={mystyle} className="App">
                <h1>Please view some popular TV Shows below</h1>

                <TvShows myTvShows={this.state.tvshows}></TvShows>

            </div>
        );
    }
}
export default Read;