import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { Card, Label } from 'semantic-ui-react'

import { GalleryElem as GalleryElemCss } from './GalleryElem.module.scss'

class GalleryElem extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      movies: [],
    }

    this.baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    this.API_KEY = 'cf85a3c0ab8d5363ec6e2d139c08cdbb'; 
    this.suffix = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
   
  
    // this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    this.getInfo();
  }
   
  getInfo = () => {
    if(this.props.genre === "" || this.props.genre === "none") {
      return(
        <p>no genre!!!!!!!!!!!!</p>
      );
    }
    let url = `${this.baseUrl}${this.API_KEY}${this.suffix}${this.props.genre}`;

    // axios.get(url).then((response) => {
    //   console.log(response);

    //   this.setState({
    //     movies: response.data.results
    //   });

    //   console.log(this.state.movies);
    // }).catch((error) => {
    //   console.log(error);
    // });
    console.log(`${url}`);
  }
  // clickHandler(item) {
  //   let url = `${this.baseUrl}${this.API_KEY}${this.suffix}${item.target.id}`;

  //   axios.get(url).then((response) => {
  //     console.log(response);

  //     this.setState({
  //       movies: response.data.results
  //     });

  //     console.log(this.state.movies);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  //   console.log(`${url}`);
  // };
  render() {
    // Check if the object is empty
 

    const noElem = Object.entries(this.state.movies).length === 0
      // && this.props.genre.constructor === Object;
      // this.state.movies === null ||
    if (noElem) {
      return (
        <Card className={GalleryElemCss}>
          <h3>No Pokemon yet!</h3>
        </Card>
      );
    } else {
    
      // Iterate over the Pokemon's abilities and generate a label for each.
      // const genreView = this.props.genre;//.abilities.map((ability, idx) => {
        return (
          <div>
            {/* <p onClick={this.clickHandler} id={genreView.id}>{genreView.name}</p> */}
            <ul>
              {this.state.movies.map((movie) =>(
                <div key = {movie.id}>
                  <p>{movie.title}</p>
                </div>
              ))}
            </ul>
          </div>
      );
    }
  }
}

// GalleryElem.propTypes = {
//   genre: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,

//   }),
// }

export default GalleryElem
