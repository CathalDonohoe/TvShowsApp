import React from 'react';
import Card, { CardImgOverlay } from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; //added for delete button for movie line 25 //needed for delete button
import axios from 'axios'; //for delete button
import{Link} from 'react-router-dom'; //for being able to change url /edit for edit button

class TvShowItem extends React.Component{

//------------------------------------------------------------------------
//NEEDED FOR DELETE BUTTON :

constructor(){
  super();
  this.DeleteTvShow = this.DeleteTvShow.bind(this);
}

DeleteTvShow(e){
 console.log("delete button clicked");

 axios.delete('http://localhost:4000/api/tvshows/'+this.props.tvshow._id) //returns a promise that its deleted
  .then(window.location.reload())
  .catch();



}
//-----------------//IF I TAKE OUT STYLE IN LINE 38 IT STRETCHES THE READ ME PAGE ITEMS TO SIZE OF PAGE---------------------------------------------------------

    render(){
        return(
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}






                
                
<Card  border="primary" bg="danger" text="black"> 
  <Card.Img align="center" width="100" height="400" varient="top" src={this.props.tvshow.poster}/>
 
    <Card.Header>{this.props.tvshow.title}</Card.Header>
      <Card.Body>
      <blockquote className="blockquote mb-0">
        <footer>
          {this.props.tvshow.year}                     
          </footer>
      </blockquote>
    </Card.Body>
    <Button text="black" variant="warning" onClick={this.DeleteTvShow}>Delete TV Show</Button>
    <Link text="black" to={"/edit/"+this.props.tvshow._id} className="btn btn-primary">Edit TV Show</Link> 


</Card>
            </div>
        )
    }
}
export default TvShowItem;