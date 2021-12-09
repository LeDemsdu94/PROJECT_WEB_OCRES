import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../cssFiles/Shop.css';


export default class AdminUpdate extends Component {

  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      item: null,
    }
  }

    componentDidMount() {
        //récupère l'id
      const id = window.location.href.substring(40);
      console.log(id);
        }

    render() {
      var {loading, item} = this.state;

      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <div>Mettre le form pour update</div>
        );
      }

      }
  }