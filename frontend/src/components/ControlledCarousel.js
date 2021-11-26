import React, { Component } from 'react';
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

    getLeagueLeaders().then(data => {
      console.log(data)
      this.setState({
        loading: true,
        items: data,
        })
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
            <Carousel className="carouselComp">
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-75"
                    src={kevin}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel_caption">
                    <h3>{items.categories[1].ranks[0].player.full_name} : {items.categories[1].ranks[0].average.points} {items.categories[1].name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 h-75"
                    src={chris}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel_caption">
                    <h3>{items.categories[2].ranks[0].player.full_name} : {items.categories[2].ranks[0].average.assists} {items.categories[2].name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 h-75"
                    src={rudy}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel_caption">
                    <h3>{items.categories[17].ranks[0].player.full_name} : {items.categories[17].ranks[0].average.rebounds} {items.categories[17].name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
          </Carousel>
          </div>
        );
      }

      }
    
  }

  