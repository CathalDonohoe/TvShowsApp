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
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>

        <div className='form-group'>
        <label>
          Tv Show title:
          </label>

          <input type="text" 
          className= 'form-control'
          value={this.state.Title}
           onChange={this.handleChangeShowTitle} />
      </div>

        

        <div className='form-group'>
        <label>
          Tv Show Year:
          </label>

          <input type="text" 
          className= 'form-control'
          value={this.state.Year}
           onChange={this.handleChangeShowYear} />

 
        <div className = 'form-group'>
          <label>
            Tv Show Poster URL:
            </label>
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