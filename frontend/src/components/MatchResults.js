import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../cssFiles/home.css';
import {getMatchResults} from '../API/API_MatchResults'
import { imagesList } from '../images'

export default class MatchResults extends Component {
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      loading: false,
      items: null,
      currentDate: date,
      tableauVar : 260,
    }
  }

  componentDidMount () {
    getMatchResults().then(data => {
      console.log(data)
      this.setState({
        loading: true,
        items: data,
        })
      })

    }

    //Faire une fonction qui retourne un booléen true or false
    //Si la currentDate est différente de celle en store
    //La valeur de tableauVar prend alors +1

    render() {
      var {loading, items, tableauVar, currentDate} = this.state;

      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Logo Home Team</th>
                <th>Home Team</th>
                <th>Score</th>
                <th>Away Team</th>
                <th>Logo Away Team</th>
              </tr>
            </thead>
            {items.games.slice(260, (tableauVar+5)).map(item => (
            <tbody key={item.id}>
              <tr>
                <td>LOGO</td>
                <td>{item.home.name}</td>
                <td>{item.home_points} - {item.away_points}</td>
                <td>{item.away.name}</td>
                <td>LOGO</td>
              </tr>
            </tbody>
            ))}
          </Table>
        );
      }

      }
    
  }

  