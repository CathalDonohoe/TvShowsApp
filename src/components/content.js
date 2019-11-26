import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';


class Content extends React.Component {



  render() {
    return (
      <div style={{backgroundColor: "lightblue"}} className="App">
        <h1 style={{color: "red"}}>Welcome to the collection of TV Shows</h1>



<Carousel>
  <Carousel.Item>
  <a href="/read"><img
      className="d-block w-100"
      src="https://miro.medium.com/max/3016/1*dBJMknulIZSAC36tTmanVA.jpeg"
      alt="First slide"
    /></a>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href="/read"><img
      className="d-block w-100"
      src="https://usercontent1.hubstatic.com/14154714.jpg"
      alt="Second slide"
    /></a>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href="/read"><img
      className="d-block w-100"
      src="http://i-vrox.com/wp-content/uploads/2018/06/series-2.jpg"
      alt="Third slide"
    /></a>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        
      </div>
    );
  }
}

export default Content;