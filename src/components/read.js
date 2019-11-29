import React from 'react'
import TvShows from './tvshows';
import axios from 'axios'; //imported for axios


class Read extends React.Component{

    state = {
        tvshows: []
    };

    

    componentDidMount() {
        axios.get('http://localhost:4000/api/tvshows') //the servers url which gets the movies api data . not allowed to work untill install cors in server.js
        .then((response)=> {
            this.setState({tvshows:response.data.tvshows})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    render(){
        const mystyle = {
            color: "Red",
            backgroundColor: "Black",
            padding: "50px",
            fontFamily: "Impact"
        };

        return(
            <div style={mystyle} className="App">
                <h1>Please view some popular TV Shows below</h1>
                
                <TvShows myTvShows={this.state.tvshows}></TvShows>
                
            </div>
        );
    }
}
export default Read;