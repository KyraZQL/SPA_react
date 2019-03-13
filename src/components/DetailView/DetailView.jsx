import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Container, Header} from 'semantic-ui-react'

import { DetailContainer, DetailContainerP, Prev, Next } from  './DetailView.module.scss'

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

            this.setState({
                info: response.data,
            });
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

    }
    componentWillReceiveProps(nextProperty) {
    // getDerivedStateFromProps(nextProperty, state) {
        // if(this.props.match.params !== nextProperty.match.params) {
        if(this.state.property !== nextProperty.match.params) {
            const { id } = nextProperty.match.params;
            const { list } = nextProperty.location.state;
            // this.setState({
            //     properties: list,
            //     property: id,
            // })
            console.log('should update to ' + id + "update property--------- " + this.state.property);

            let curIndex = this.state.properties.findIndex((elem) => (this.state.property == elem.id));
            console.log('cur Index' , curIndex);
            let newPrevId = 0;
            if(curIndex !== 0 && curIndex !== -1) {
                const newIndex = curIndex - 1;
                newPrevId = this.state.properties[newIndex].id;
            } else {
                const newIndex = this.state.properties.length -1;
                 newPrevId = this.state.properties[newIndex].id;
            }
            console.log("prev id should be " + newPrevId);
            // this.setState({
            //     previd: newPrevId,
            // });
            let newNextId = 0;
    
            if(curIndex !== this.state.properties.length -1 && curIndex !== -1) {
                const newIndex = curIndex + 1;
                newNextId = this.state.properties[newIndex].id;
            } else {
                const newIndex = 0;
                 newNextId = this.state.properties[newIndex].id;
            }
            console.log("next id should be " + newNextId);
            // this.setState({
            //     nextid: newNextId,
            // });
            let url = `${this.baseUrl}${id}${this.API_KEY}${this.suffix}`;
            axios.get(url).then((response) => {
                this.setState({
                    info: response.data,
                });
                // console.log("already update property--------- " + "property" + this.state.property);
            }).catch((error) => {
                console.log('error', error);
            });
            this.setState({
                properties: list,
                property: id,
                previd: newPrevId,
                nextid: newNextId,
            });
        }
    }


    render() {
        return (
            <Container className={DetailContainer}>
                <div className="ButtonContainer">
                    <Link className={Prev} to={{
                        pathname: "/detail/" + this.state.previd, 
                        state: {
                            list: this.state.properties
                        }
                    }}>
                    &#10094; Prev
                    </Link>
                    <Link className={Next} to={{
                        pathname: "/detail/" + this.state.nextid, 
                        state: {
                            list: this.state.properties
                        }
                    }}>
                    Next &#10095;
                    </Link>
                </div>

                <h1 className={DetailContainerP}>{this.state.info.title}</h1>
                <img className="movie" src={'https://image.tmdb.org/t/p/w500' + this.state.info.backdrop_path}/>
                <p className={DetailContainerP}>{this.state.info.overview}</p>
                <p className={DetailContainerP}>{this.state.info.homepage}</p>
            
            </Container>
            
        );

    }
}

DetailView.propTypes = {
    properties: PropTypes.array,
    property: PropTypes.number,
    info: PropTypes.string,
    previd: PropTypes.number,
    nextid: PropTypes.number,
}

export default DetailView
