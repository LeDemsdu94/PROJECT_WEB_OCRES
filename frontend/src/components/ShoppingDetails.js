import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import {getShop} from '../API/API_Shop'
import '../cssFiles/Shop.css';


export default class Shopping extends Component {

  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      item: null,
    }
  }

    componentDidMount() {
      const id = window.location.href.substring(27);
        fetch("http://localhost:3001/api/shop/" + id)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    item: json,
                    loading: true
                });
            })
        }

    render() {
      var {loading, item} = this.state;

      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <Container fluid="md">
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                    <Card.Title>{item.price} dollars</Card.Title>
                      <Card.Text className="description">
                      {item.title}
                    </Card.Text>
                    <Button variant="primary">Modify</Button>
                    </Card.Body>
                </Card>
          </Container>
        );
      }

      }
  }