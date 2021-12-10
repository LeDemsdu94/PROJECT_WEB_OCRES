import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../cssFiles/Shop.css';


export default class AdminUpdate extends Component {

  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props)
    this.state = {
      item: null,
    }
  }

    componentDidMount() {
        //récupère l'id
      const id = window.location.href.substring(40);
      console.log(id);
      (async () => {
        const rawResponse = await fetch('http://localhost:3001/api/shop/'+id, {
          
        });
        const content = await rawResponse.json();
      
        console.log(content);
        this.setState({
          item: content,
        })
      })()
      
        }
      

    render() {
      console.log(this.state.item)
        return (
          
          <div></div>
        );
      }

    
  }