import React from 'react';
import '../App.css';
import axios from 'axios'; //to talk to the server 
import { thisExpression } from '@babel/types';

class Edit extends React.Component {

  //again variables for tv show item
  constructor(props) {
    super(props);

    this.state = {
      Title: '',
      Year: '',
      Poster: '',
      _id: ''
    };


    //functions to update/change tv show item
    this.handleChangeShowTitle = this.handleChangeShowTitle.bind(this);
    this.handleChangeShowYear = this.handleChangeShowYear.bind(this);
    this.handleChangeShowPoster = this.handleChangeShowPoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //handles change events

  handleChangeShowTitle(e) {
    this.setState({ Title: e.target.value });
  }

  handleChangeShowYear(e) {
    this.setState({ Year: e.target.value });
  }

  handleChangeShowPoster(e) {
    this.setState({ Poster: e.target.value });
  }

  //yet again submits changes to server and updates item
  handleSubmit(e) {
    alert('Tv Show:  ' + this.state.Title + "  " + this.state.Year + "  " + this.state.Poster);
    e.preventDefault();

    const newShow = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }

    axios.put('http://localhost:4000/api/TvShows/' + this.state._id, newShow)
      .then()
      .catch()

    //changes the inputs to be blank once submit clicked
    this.setState({
      Title: '',
      Year: '',
      Poster: '',
    });

  }



  //reads data from server
  componentDidMount() {
    alert(this.props.match.params.id)//displays an alert "localhost:3000 says"
    axios.get('http://localhost:4000/api/TvShows/' + this.props.match.params.id)//takes info from server
      .then((Response) => {//displays info that was already in the item
        this.setState({
          _id: Response.data._id,
          Title: Response.data.title,
          Year: Response.data.year,
          Poster: Response.data.poster
        });
      })
      .catch();
  }

  //visual output for user
  render() {
    return (
      <div className="App">
        <b><h1 style={{ color: "red" }}>Type below to edit the Tv Show {this.state.Title}</h1></b>
        <form onSubmit={this.handleSubmit}>

          <div className='form-group'>
            <b><label style={{ color: "red" }}>
              Tv Show title:
        </label></b>
            <input type="text"
              className='form-control'
              value={this.state.Title}
              onChange={this.handleChangeShowTitle} />
          </div>



          <div className='form-group'>
            <b><label style={{ color: "red" }}>
              Tv Show Year:
        </label></b>

            <input type="text"
              className='form-control'
              value={this.state.Year}
              onChange={this.handleChangeShowYear} />


            <div className='form-group'>
              <b><label style={{ color: "red" }}>
                Tv Show Poster URL:
          </label></b>
              <textarea
                rows='3'
                className='form-control'
                value={this.state.Poster}
                onChange={this.handleChangeShowPoster}></textarea>
            </div>
          </div>
          <input type="submit" value="Submit" />



        </form>
      </div>
    );
  }
}

export default Edit;