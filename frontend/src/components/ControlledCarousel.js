/*import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import kevin from '../assets/kevin-durant.jpg';
import chris from '../assets/chris-paul.jpg';
import rudy from '../assets/rudy-gobert.jpg';
import '../cssFiles/home.css';
import {getLeagueLeaders} from '../API/API_LeagueLeaders.js'

export default class ControlledCarousel extends Component {

  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      items: null,
    }
  }

  componentDidMount () {
    this._loadLeagueLeaders();
    }

    _loadLeagueLeaders() {
      getLeagueLeaders().then(data => {
        console.log(data)
        this.setState({
          loading: true,
          items: data,
          })

    console.log(this.state.items.categories)
        })
    }

    render() {
      var {loading, items} = this.state;

      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <div>
            <Carousel className="carouselComp" responsive>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-75"
                    src={kevin}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel_caption">
                    <h3>{items.categories[26].ranks[0].player.full_name} : {items.categories[26].ranks[0].average.points} {items.categories[26].name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 h-75"
                    src={chris}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel_caption">
                    <h3>{items.categories[30].ranks[0].player.full_name} : {items.categories[30].ranks[0].average.assists} {items.categories[30].name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 h-75"
                    src={rudy}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel_caption">
                    <h3>{items.categories[29].ranks[0].player.full_name} : {items.categories[29].ranks[0].average.rebounds} {items.categories[29].name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
          </Carousel>
          </div>
        );
      }

      }
  }*/

import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import kevin from '../assets/kevin-durant.jpg';
import chris from '../assets/chris-paul.jpg';
import rudy from '../assets/rudy-gobert.jpg';
import {getLeagueLeaders} from '../API/API_LeagueLeaders.js'


export default class ControlledCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
      loading: false,
      items: null,
    };
  }

  componentDidMount () {
    this._loadLeagueLeaders();
    
    }

    _loadLeagueLeaders() {
      getLeagueLeaders().then(data => {
        //console.log(data)
        this.setState({
          loading: true,
          items: data,
          })
          console.log(this.state.items.categories)
        })
    }

  
  render() {
    var {loading} = this.state;

    if(!loading) {
        return <div>Loading...</div>;
      }
    else {
      return (
        <div className="container-fluid" style={{ paddingBottom: 20 }}>
          
              <RBCarousel
                animation={true}
                autoplay={this.state.autoplay}
                slideshowSpeed={2000}
                defaultActiveIndex={0}
                leftIcon={this.state.leftIcon}
                rightIcon={this.state.rightIcon}
                onSelect={this._onSelect}
                ref={this.slider}
                version={4}
              >
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={kevin}
                  />
                  <div className="carousel-caption">
                    <h3>{this.state.items.categories[26].ranks[0].player.full_name} : {this.state.items.categories[26].ranks[0].average.points} {this.state.items.categories[26].name}</h3>
                  </div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={chris}
                  />
                  <div className="carousel-caption">
                    <h3>{this.state.items.categories[30].ranks[0].player.full_name} : {this.state.items.categories[30].ranks[0].average.assists} {this.state.items.categories[30].name}</h3>
                  </div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={rudy}
                  />
                  <div className="carousel-caption">
                    <h3>{this.state.items.categories[29].ranks[0].player.full_name} : {this.state.items.categories[29].ranks[0].average.rebounds} {this.state.items.categories[29].name}</h3>
                  </div>
                </div>
              </RBCarousel>
            
        </div>
      );
    }
    
  }
}

