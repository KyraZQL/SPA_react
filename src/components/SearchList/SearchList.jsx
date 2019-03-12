import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ListElem from './ListElem/ListElem'

import { SearchList as SearchListCss} from './SearchList.module.scss'

// const { API_KEY } = 'cf85a3c0ab8d5363ec6e2d139c08cdbb';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      value: '',
      movies: [],
    };
    this.baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    this.API_KEY = 'cf85a3c0ab8d5363ec6e2d139c08cdbb';
    this.middle = '&language=en-US&query=';
    this.suffix = '&page=1&include_adult=false';

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // Form the URL
    let url = `${this.baseUrl}${this.API_KEY}${this.middle}${this.state.value}${this.suffix}`;
    // console.log(`${item.target.id}`);
    // GET some data back!
    axios.get(url).then((response) => {
      console.log(response);
      
      this.setState({
        movies: response.data.results
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
  }

  inputChangeHandler(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className={SearchListCss}>

        <Input
          onChange={this.inputChangeHandler}
          label='Search movie'
          placeholder='Input # here!'
          value={this.state.value}
        />
        <Button onClick={this.clickHandler.bind(this)}>
          GET
        </Button>

        <p>{this.state.value}</p>
        <p>place holder for SearchList</p>
        <div className="MovieContainer"> 
          {this.state.movies.map((movie) =>(
            <div key = {movie.id}>
              <Link to={{
                pathname: "/detail/" + movie.id, 
                state: {
                  list: this.state.movies
                }
              }}>
              <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              {/* alt={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} */}
              <p>{movie.title}</p>
              </Link>
            </div>
          ))}
        </div>
        {/* <ListElem movies={this.state.movies}/> */}
      </div>
    )
  }

}

export default Search
