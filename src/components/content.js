import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';


class Content extends React.Component {


  //sets text color and background image
  render() {
    return (
      <div style={{ backgroundColor: "lightblue" }} className="App">
        <h1 style={{ color: "red" }}>Welcome to the collection of TV Shows</h1>



        <Carousel>
          <Carousel.Item>
            <a href="/read"><img height="600" //the carousel items display the images for the slideshow taking a url
              className="d-block w-100"     //the a href links the image to another page when clicked
              src="http://images6.fanpop.com/image/photos/34100000/Tv-Shows-tv-shows-family-34187485-1024-768.jpg"
              alt="First slide"
            /></a>
            <Carousel.Caption>
              <h3 style={{ color: "red" }}>See Top TV Shows</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/create"><img height="600" width="1200"
              className="d-block w-100"
              src="https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/6/65/directors_chair.jpg?itok=MyK46J-X"
              alt="Second slide"
            /></a>

            <Carousel.Caption>
              <h3 style={{ color: "red" }}>Add and Edit the list of shows</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/contact"><img height="600"
              className="d-block w-100"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/contact-details-3381225_1280-770x433.jpeg?BbL8N.RKJ6scNSKjUSEXn7_XbVnXN1wp"
              alt="Third slide"
            /></a>

            <Carousel.Caption>
              <h3 style={{ color: "red" }}>Contact us if any problems</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </div>
    );
  }
}

export default Content;