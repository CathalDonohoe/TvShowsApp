import React from 'react';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Contact from './components/contact';
import NavLink from 'react-bootstrap/NavLink';


class App extends React.Component {

  //router for client side routing
  //so user can go back and forward from each component
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar bg="light" variant="primary">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://www.vippng.com/png/detail/29-295734_film-vector-reel-film-movie-icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Tv show App
    </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <NavLink href="/contact">Contact</NavLink>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>

        {/* used to display footer at the base of every page */}
        <footer className="foot">
          <div>
            <h5>Tv Shows App</h5>
            {/* shows copyright sign */}
            <span>&copy; Tv shows App 2019 </span>
          </div>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
