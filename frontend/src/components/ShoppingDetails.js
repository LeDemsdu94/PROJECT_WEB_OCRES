import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../cssFiles/Shop.css';
import { Link } from 'react-router-dom';


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
          <Container fluid="md" className="cardDetails">
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                    <Card.Title>{item.price} dollars</Card.Title>
                      <Card.Text className="titredetails">
                      {item.title}
                    </Card.Text>
                    <Card.Text className="description">
                      Description : {item.description}
                    </Card.Text>
                    <Link to={ '/admin/shop/update/' + item._id }>Modify</Link>
                    <Link to={ '/admin/shop/delete/' + item._id } className="links_space">Delete</Link>
                    </Card.Body>
                </Card>
          </Container>
        );
      }

      }
  }