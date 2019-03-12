import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

import { ListElem as ListElemCss } from './ListElem.module.scss'

class ListElem extends Component {
  render() {
    // Check if the object is empty
    const noElem = Object.entries(this.props.movies).length === 0
      && this.props.movies.constructor === Object;

    if (noElem) {
      return (
        <Card className={ListElemCss}>
          <h3>No Movies yet!</h3>
        </Card>
      )
    } else {
    //   const movieView = this.props.movies;//.abilities.map((ability, idx) => {
        return (
            <div>
                <ul>
                    {this.props.movies.map((movie) =>(
                        <div key = {movie.id}>
                        <p>{movie.title}</p>
                        </div>
                    ))}
                </ul>
            </div>
       // )
      //}
      );

      // Display some data about the Pokemon, and its abilities.
      // return (
      //   <Card className={GalleryElemCss}>
      //     <Card.Content>
      //       <Card.Header className={GalleryElemHeader}>
      //         {this.props.pokemon.name}
      //       </Card.Header>
      //       <Card.Meta>
      //         Pokedex #{this.props.pokemon.id}
      //       </Card.Meta>
      //       <img
      //         src={this.props.pokemon.sprites.front_default}
      //         alt={`Sprite of ${this.props.pokemon.name}`}
      //       />
      //       <h4>Abilities</h4>
      //       {abilitiesView}
      //     </Card.Content>
      //   </Card>
      // )
    }
  }
}

ListElem.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.object,
    // id: PropTypes.number,
    // abilities: PropTypes.arrayOf(PropTypes.shape({
    //   ability: PropTypes.shape({
    //     name: PropTypes.string,
    //     url: PropTypes.string,
    //   })
    // })),
    // sprites: PropTypes.object,
  }),
}

export default ListElem
