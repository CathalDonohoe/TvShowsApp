import React from 'react'; 
import '../App.css';
import axios from 'axios'; //to talk to the server 
import { thisExpression } from '@babel/types';

class Edit extends React.Component {

  constructor(props){
    super(props);

    this.state = {Title: '',
                  Year: '',
                  Poster: '',
                  _id:''};


    this.handleChangeShowTitle = this.handleChangeShowTitle.bind(this);
    this.handleChangeShowYear = this.handleChangeShowYear.bind(this);
    this.handleChangeShowPoster = this.handleChangeShowPoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //-------------------------------------------------
  //HANDLE CHANGE EVENTS:
  //-------------------------------------------------
  handleChangeShowTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangeShowYear(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeShowPoster(e) {
    this.setState({Poster: e.target.value});
  }
  //-------------------------------------------------

  handleSubmit(e) {
    alert( 'Tv Show:  ' + this.state.Title + "  "  + this.state.Year + "  " + this.state.Poster);
    e.preventDefault();

    const newShow = {
      title:this.state.Title,
      year:this.state.Year,
      poster:this.state.Poster
    }

    axios.put('http://localhost:4000/api/TvShows/' + this.state._id, newShow) //takes the url of movie we are editing and the body 
    .then()
    .catch()

    //the following to make the inputs of edit blank after submit button Clicked
    this.setState({Title:'',
                    Year:'',
                  Poster:'',
                  });
    
  }

  //---------------------------------------------------------
  //FOR EDIT CHANGE USING ID

  //read the data when u click on component
  componentDidMount(){
 alert(this.props.match.params.id) //passes id as part of the url for edit
    axios.get('http://localhost:4000/api/TvShows/'+ this.props.match.params.id) //comes back with json in url and update state
    .then((Response)=>{
      this.setState({
          _id:Response.data._id,
          Title:Response.data.title,
          Year:Response.data.year,
          Poster:Response.data.poster
      });
    })
    .catch();
  }

  //---------------------------------------------------------
  //WHAT U SEE ON PAGE BELOW:
  //---------------------------------------------------------
  render() { //visual piece
    return (
      <div>
      <h1 style={{color: "red"}}>Type below to edit the Tv Show {this.state.Title}</h1>
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

export default Edit;