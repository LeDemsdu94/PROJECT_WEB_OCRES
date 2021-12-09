import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import {getShop} from '../API/API_Shop'
import '../cssFiles/Shop.css';
import { Link } from 'react-router-dom';

export default class Shopping extends Component {
  
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      items: null,
      socks: [],
    }
  }

  componentDidMount () {
    this._loadBack();
    }

    _loadBack() {
      getShop().then(data => {
        console.log(data)
        this.setState({
          loading: true,
          items: data,
          socks: [ ...this.state.socks, ...data],
          })
        })
    }
    //On envoie vers la page avec Id
    handleClick (id_item) {
      console.log(id_item);
    }

    render() {
      var {loading} = this.state;


      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <Container fluid="md" className="add-space">
            <Row md="auto" className="row">
              {this.state.socks.map(c => 
              <Col xs={7} sm={6} md={5}>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={c.imageUrl} />
                    <Card.Body>
                    <Card.Title>{c.price} dollars</Card.Title>
                      <Card.Text className="description">
                      {c.title}
                    </Card.Text>
                    <Link to={ '/shop/' + c._id }>Details</Link>
                    </Card.Body>
                </Card>
                </Col>
            )}
            </Row>
          </Container>
        );
      }

      }
  }