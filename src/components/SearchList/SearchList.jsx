import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './SearchList.module.scss'

class Search extends Component {

  constructor() {
    super();

    this.state = {
      value: '',
      movies: [],
      sortedmovies: [],
      sortfeature: '',
      showMenu: false,
    };
    this.baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    this.API_KEY = 'cf85a3c0ab8d5363ec6e2d139c08cdbb';
    this.middle = '&language=en-US&query=';
    this.suffix = '&page=1&include_adult=false';

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.sortByAsc = this.sortByAsc.bind(this);
    this.sortByDec = this.sortByDec.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.changeFeature = this.changeFeature.bind(this);
  }

  clickHandler() {
    let url = `${this.baseUrl}${this.API_KEY}${this.middle}${this.state.value}${this.suffix}`;
    axios.get(url).then((response) => {
      console.log(response);
      
      this.setState({
        movies: response.data.results, 
        sortedmovies: response.data.results,
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
  }

  inputChangeHandler(event) {
    this.setState({ value: event.target.value });
  }
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }
  changeFeature(item) {
    // event.preventDefault();
    console.log('change feature' + item.target.id);
    this.setState({
      sortfeature: item.target.id,
    });
    this.setState((prevState) => {
      return { 
      showMenu: !(prevState.showMenu),
      }
    });
  }


  sortByAsc() {
    let sortedmovies = [];
    console.log('this.state', this.state);
    let movies = this.state.movies;
    if(movies === null) { return; }
    if(this.state.sortfeature === "title") {
      sortedmovies = movies.sort((m1, m2) => {
        console.log('movie title', m1.title, m2.title);
        return m1.title - m2.title;
      });
    } else if(this.state.sortfeature === "count") {
      sortedmovies = movies.sort((m1, m2) => {
        console.log('movie count', m1.vote_count, m2.vote_count);
        console.log(m1.vote_count - m2.vote_count);
        return m1.vote_count - m2.vote_count;
      });

      sortedmovies.map((movie) => {
        console.log("after sort", movie.vote_count);
      });
    } else if(this.state.sortfeature === "avg") {
      sortedmovies = movies.sort((m1, m2) => {
        return m1.vote_average - m2.vote_average;
      });
    }

    this.setState({
      sortedmovies: sortedmovies,
    });
 
  }

  sortByDec() {
    let sortedmovies = [];
    console.log('this.state', this.state);
    let movies = this.state.movies;
    if(movies === null) { return; }

    if(this.state.sortfeature === "title") {
      sortedmovies = movies.sort((m1, m2) => {
        console.log('movie title', m1.title, m2.title);
        return m2.title - m2.title;
      });
    } else if(this.state.sortfeature === "count") {
      sortedmovies = movies.sort((m1, m2) => {
        return m2.vote_count - m1.vote_count;
      });
    } else if(this.state.sortfeature === "avg") {
      sortedmovies = movies.sort((m1, m2) => {
        return m2.vote_average - m1.vote_average;
      });
    }

    this.setState({
      sortedmovies: sortedmovies,
    });
  }

  render() {
    return (
      <div>

        <Input
          onChange={this.inputChangeHandler}
          label='Search movie'
          placeholder='Input # here!'
          value={this.state.value}
        />
        <Button onClick={this.clickHandler}>
          GET
        </Button>

        <div className="SortFeature">
          <Button onClick={this.showMenu}>
            Show menu
          </Button>
          <div>
            {
              this.state.showMenu
                ? (
                  <div className="Menu">
                    <Button onClick={this.changeFeature} id="title"> Title </Button>
                    <Button onClick={this.changeFeature} id="count"> Vote Count </Button>
                    <Button onClick={this.changeFeature} id="avg"> Vote Average </Button>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        </div>
        <Button onClick={this.sortByAsc}>
          Asc
        </Button> 
        <Button onClick={this.sortByDec}>
          Dec
        </Button>

        <div className="MovieList"> 
          {this.state.sortedmovies.map((movie) =>(
            <div key = {movie.id}>
              <Link to={{
                pathname: "/detail/" + movie.id, 
                state: {
                  list: this.state.movies
                }
              }}>
              <div className="ListElem">
              <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              <p>{movie.title}</p>
              <p>Vote Count: {movie.vote_count}</p>
              <p>Vote Average: {movie.vote_average}</p>
              </div>
              {/* <Card>
                <Card.Content>
                  <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
                  <Card.Header>
                      <div>
                          <p>{movie.title}</p>
                      </div>
                  </Card.Header>       
                </Card.Content>
              </Card> */}
              </Link>
            </div>
          ))}
        </div>

      </div>
    );
  }

}

export default Search
