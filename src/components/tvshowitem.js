import React from 'react';
import Card, { CardImgOverlay } from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TvShowItem extends React.Component {



  constructor() {
    super();//used to access and call functions on an object's parent.
    this.DeleteTvShow = this.DeleteTvShow.bind(this);
  }

  DeleteTvShow(e) {
    console.log("delete button clicked");

    axios.delete('http://localhost:4000/api/tvshows/' + this.props.tvshow._id) //tells user it was deleted
      .then(window.location.reload())
      .catch();



  }

  //the cards are how the item is laid out on the page, the order and format that it will be displayed in
  render() {
    return (
      <div className="cardDiv">


        <Card border="primary" bg="warning" text="black">
          <Card.Img align="center" varient="top" src={this.props.tvshow.poster} />

          <Card.Header>{this.props.tvshow.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <footer>
                {this.props.tvshow.year}
              </footer>
            </blockquote>
          </Card.Body>
          <Button text="black" variant="danger" onClick={this.DeleteTvShow}>Delete TV Show</Button>
          <Link text="black" to={"/edit/" + this.props.tvshow._id} className="btn btn-primary">Edit TV Show</Link>


        </Card>
        <br />
        <br />
      </div>
    )
  }
}
export default TvShowItem;