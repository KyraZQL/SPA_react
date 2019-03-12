import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Card, Label, Icon, Image, Container, Header} from 'semantic-ui-react'
import './DetailView.module.scss'

class DetailView extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties: props.location.state.list,
            property: props.match.params.id,
            info: '',
            curidx: '',
            previd: '',
            nextid: '',
        } 


      
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.API_KEY = '?api_key=cf85a3c0ab8d5363ec6e2d139c08cdbb'; 
        this.suffix = '&language=en-US';

      
        let url = `${this.baseUrl}${this.state.property}${this.API_KEY}${this.suffix}`;

        axios.get(url).then((response) => {
            // console.log("respon" + response);

            this.setState({
                info: response.data,
            });
            console.log("in did mount????????????? " + "properties" + this.state.properties + "property" + this.state.property);
        

        }).catch((error) => {
            console.log('error', error);
        });
    }

    componentDidMount() {
        console.log('will mount', this.state.property);
        this.state.properties.map((elem) => {
            console.log("got elem in the list" + elem.id);
        });
        let curIndex = this.state.properties.findIndex((elem) => (this.state.property == elem.id));
        this.setState({
            curidx: curIndex,
        });
        console.log('cur idx', this.state.curidx);

        this.getPrevId();
        this.getNextId();

    }
        // const { id } = this.props.match.params;
        // const { list } = this.props.location.state;
        // this.setState({
        //     properties: list,
        //     property: id,
        // })
        // let curIndex = this.state.properties.findIndex((elem) => (this.state.property == elem.id));
        // this.setState({
        //     curidx: curIndex,
        // });
        // this.getPrevId();
        // this.getNextId();
    //     this.id = parseInt(id);
    //     this.list = list;
    //     this.baseUrl = 'https://api.themoviedb.org/3/movie/';
    //     this.API_KEY = '?api_key=cf85a3c0ab8d5363ec6e2d139c08cdbb'; 
    //     this.suffix = '&language=en-US';

      
    //     let url = `${this.baseUrl}${this.id}${this.API_KEY}${this.suffix}`;

    //     axios.get(url).then((response) => {
    //         console.log("respon" + response);

    //         this.setState({
    //             info: response.data,
    //         });
    //         console.log("in did mount????????????? " + id + "properties" + this.state.properties + "property" + this.state.property);
        

    //     }).catch((error) => {
    //         console.log('error', error);
    //     });
    // }     
    getPrevId() {
        // this.state.properties.map((elem) => {
        //     console.log("got elem in the list" + elem.id);
        // });
        // let curIndex = this.state.curidx;

        let curIndex = this.state.properties.findIndex((elem) => (this.state.property == elem.id));
        console.log('cur Index' , curIndex);
        let newId = 0;
        if(curIndex !== 0 && curIndex !== -1) {
            const newIndex = curIndex - 1;
            newId = this.state.properties[newIndex].id;
        } else {
            const newIndex = this.state.properties.length -1;
             newId = this.state.properties[newIndex].id;
        }
        console.log("prev id should be " + newId);
        this.setState({
            previd: newId,
        });
        return newId;
    }
    getNextId() {
      
        // let curIndex = this.state.curidx;
        let curIndex = this.state.properties.findIndex((elem) => (this.state.property == elem.id));
        console.log('cur Index' , curIndex);
      
        let newId = 0;
        if(curIndex !== this.state.properties.length -1 && curIndex !== -1) {
            const newIndex = curIndex + 1;
            newId = this.state.properties[newIndex].id;
        } else {
            const newIndex = 0;
             newId = this.state.properties[newIndex].id;
        }
        console.log("next id should be " + newId);
        this.setState({
            nextid: newId,
        });
        return newId;
    }
    componentWillReceiveProps(nextProperty) {
        console.log('receive props');
        // if(this.props.match.params !== nextProperty.match.params) {
            const { id } = nextProperty.match.params;
            const { list } = nextProperty.location.state;
            this.setState({
                properties: list,
                property: id,
            })
            let curIndex = this.state.properties.findIndex((elem) => (this.state.property == elem.id));
            this.setState({
                curidx: curIndex,
            });
            console.log('cur idx in the will receive props ', this.state.curidx);
            this.getPrevId();
            this.getNextId();

            let url = `${this.baseUrl}${id}${this.API_KEY}${this.suffix}`;

            axios.get(url).then((response) => {
                console.log("respon" + response);

                this.setState({
                    info: response.data,
                });
                console.log("already update property--------- " + "property" + this.state.property);
            }).catch((error) => {
                console.log('error', error);
            });
        // }
    }
  
    render() {
        return (
            <Container fluid className="MovieContainer">
              <div className="ButtonContainer">
                <Link className="Prev" to={{
                    pathname: "/detail/" + this.state.previd, 
                    state: {
                        list: this.state.properties
                    }
                }}>
                   {/* <button className="Prev"> */}
                   &#10094; Prev
                    {/* </button> */}
                </Link>
                <Link className="Next" to={{
                    pathname: "/detail/" + this.state.nextid, 
                    state: {
                        list: this.state.properties
                    }
                }}>
                   Next &#10095;
                </Link>
                </div>
           
               
                <Image src={'https://image.tmdb.org/t/p/w500' + this.state.info.backdrop_path}/>
                <p>{this.state.info.overview}</p>
                <Header>{this.state.info.homepage}</Header>
            </Container>
            
        );

    }
}

// DetailView.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,

//   }),
// }

export default DetailView
