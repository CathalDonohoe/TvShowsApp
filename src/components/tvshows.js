import React from 'react';
import TvShowItem from './tvshowitem';

class TvShows extends React.Component{

    render(){
        return this.props.myTvShows.map((tvshow)=>{
            return <TvShowItem key={tvshow.poster} tvshow={tvshow}></TvShowItem>
            
        });
    }
}
export default TvShows;