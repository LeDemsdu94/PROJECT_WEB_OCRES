import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import newsNadal from '../assets/newsNadal.png';
import '../cssFiles/home.css';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import axios from 'axios';


export default class ControlledCarousel extends Component {

  state = {
    loading: false,
    items: null,
  };

   componentDidMount()
  {
    fetch("https://tennis-data1.p.rapidapi.com/tennis/players", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tennis-data1.p.rapidapi.com",
		"x-rapidapi-key": "3b8e03ca05msh078f52b6805f3f5p14f3edjsn4620da01d5e7"
	}
})
    .then(res => res.json())
    .then(json => {
      console.log(json);
        this.setState({
          loading: true,
          items: json,
        })
    });
    
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
              {items.data.slice(0, 5).map(item => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100 h-75"
                    src={newsNadal}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.username}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
          </div>
        );
      }

      }
    
  }

  