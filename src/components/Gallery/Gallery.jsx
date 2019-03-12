import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Gallery.scss'
import Example from '../Example/Example.jsx';

// import GalleryElem from './GalleryElem/GalleryElem'

// import {  Gallery as GalleryCss, Genre, container } from './GalleryNav.module.scss'


class Gallery extends Component {


  constructor() {
    super();

    this.state = {
      value: '',
      genres: [],
      selectedGenre: '',
      movies: [],
      filteredmovies: [],
    };

    // this.clickHandler = this.clickHandler.bind(this);


    this.baseUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';
    this.API_KEY = 'cf85a3c0ab8d5363ec6e2d139c08cdbb'; 
    this.suffix = '&language=en-US';
   
    this.mbaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    this.msuffix = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
   
    let url = `${this.baseUrl}${this.API_KEY}${this.suffix}`;

    axios.get(url).then((response) => {
      console.log(response);

      this.setState({
        genres: response.data.genres
      });

      console.log(this.state.genres);
    }).catch((error) => {
      console.log(error);
    });


    let movie_url = `${this.mbaseUrl}${this.API_KEY}${this.msuffix}`;

    axios.get(movie_url).then((response) => {
      console.log(response);

      this.setState({
        movies: response.data.results,
        filteredmovies: response.data.results,
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
    console.log(`${movie_url}`);
  }

  clickHandler(item) {
    console.log(`got new item id ${item.target.id}`);
    this.setState({
      selectedGenre: item.target.id,
    });

    this.state.movies.map((movie, idx) => {
      console.log("before filter movie", movie.id, idx);
    });

    if(item.target.id === "") {
      this.setState((prevState) => {
        return{
          filteredmovies: prevState.movies
        }
      })
    } else {  
      const genre_id = parseInt(item.target.id);
      this.setState((prevState) => {
        return{
          filteredmovies: prevState.movies.filter((movie) => {
            console.log('movie genre ids', movie.genre_ids, 'id', genre_id);
            console.log(movie.genre_ids.includes(genre_id));
            return movie.genre_ids.includes(genre_id);
          }),
        }
      });
    }
    this.state.filteredmovies.map((movie, idx) => {
      console.log("after filter movie", movie.id, idx);
    });
  }
 

  render() {
    return (
      <div className="Gallery">
        <div className="GenreContainer">
            <div id="" onClick={this.clickHandler.bind(this)} className="genre">
              {/* <p>{genre.id}</p> */}
              <p>All</p>
            </div>
          {this.state.genres.map((genre) =>(
            <div key={genre.id} id={genre.id} onClick={this.clickHandler.bind(this)} className="genre">
              {/* <p>{genre.id}</p> */}
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
        <div className="MovieContainer"> 
          {this.state.filteredmovies.map((movie) =>(
            <Link to={{
              pathname: "/detail/" + movie.id, 
              state: {
                list: this.state.filteredmovies
              }
              }}> 
              <Card key = {movie.id}>
                <Card.Content>
                  <Card.Header>
                      <div>
                          <p>{movie.original_title}</p>
                      </div>
                  </Card.Header>
              
                  <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
                  {/* alt={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} */}
              
                </Card.Content>

              </Card>
            </Link>
          ))}
        </div>
      </div>
    )
  }

}

export default Gallery
