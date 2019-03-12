import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import './App.scss'
import Home from '../Home/Home.jsx';
import Example from '../Example/Example.jsx';
import Pokemon from '../Pokemon/Pokemon.jsx';
import Gallery from '../Gallery/Gallery.jsx'
import Search from '../SearchList/SearchList.jsx'
import Detail from '../DetailView/DetailView'


class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <header>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">example</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
        </ul>
        </header>

        {/* <hr /> */}

        <Route exact path="/" component={Home} />
        <Route path="/example" component={Example} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/search" component={Search} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </Router>
    );
  }
}

export default App;
