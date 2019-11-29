import React from 'react';
import '../App.css';

class Contact extends React.Component {



  render() {
    return (
      <div style={{backgroundColor: "lightblue"}} className="App">
       <b> <i> <h1 style={{color: "red"}}>Welcome to the contact page</h1>
        <h2 style={{color: "red"}}>If you wish to get in contact with this app's creater please contact on of the following</h2>
        <br></br>
        <h3 style={{color: "red"}}>Email: g00344919@gmit.ie</h3>
        <h3 style={{color: "red"}}>Phone: 0877595465</h3>
        <a href ="https://github.com/SourLeaf"><h3 style={{color: "red"}}>Github: https://github.com/SourLeaf</h3></a>
        <br></br>
        <h2 style={{color:"red"}}>Other forms of contact include:</h2>
        <a href ="https://www.facebook.com/"><h3 style={{color:"red"}}>Facebook</h3></a>
        <a href ="https://twitter.com/"><h3 style={{color:"red"}}>Twitter</h3></a>
        <a href ="https://www.instagram.com/"><h3 style={{color:"red"}}>Instagram</h3></a>
        <img  width ="300" height="300" src="https://onecluecrossword.net/wp-content/uploads/One-Clue-Crossword-Movie-Reel.jpg"></img>
        </i> 
        </b> 
        
      </div>
    );
  }
}

export default Contact;