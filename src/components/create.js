import React from 'react';
import axios from 'axios'; //imported

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Title: '',
                  Year: '',
                  Poster: ''};

                  
    this.handleChangeShowTitle = this.handleChangeShowTitle.bind(this);
    this.handleChangeShowYear = this.handleChangeShowYear.bind(this);
    this.handleChangeShowPoster = this.handleChangeShowPoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeShowTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangeShowYear(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeShowPoster(e) {
    this.setState({Poster: e.target.value});
  }

  //------------------------------------------------------------------------------------------------------
  // for (9) in server.js for writing data 
  //------------------------------------------------------------------------------------------------------

  handleSubmit(e) {
    alert( 'Tv Show:  ' + this.state.Title + "  "  + this.state.Year + "  " + this.state.Poster);
    e.preventDefault();

    const newTvShow = {
      title:this.state.Title,
      year:this.state.Year,
      poster:this.state.Poster
    }
    axios.post('http://localhost:4000/api/tvshows',newTvShow)
    .then(window.location.reload())
    .catch();
  }


  

  render() {
    return (
      <div className="App">
        <b><h1 style={{color:"red"}}>Create a new Tv show here</h1></b>
        <form onSubmit={this.handleSubmit}>

        <div className='form-group'>
        <b><label style={{color:"red"}}>
          Tv Show title:
          </label></b>

          <input type="text" 
          className= 'form-control'
          value={this.state.Title}
           onChange={this.handleChangeShowTitle} />
      </div>

        

        <div className='form-group'>
        <b><label style={{color:"red"}}>
          Tv Show Year:
          </label></b>

          <input type="text" 
          className= 'form-control'
          value={this.state.Year}
           onChange={this.handleChangeShowYear} />

 
        <div className = 'form-group'>
          <b><label style={{color:"red"}}>
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

export default Create;