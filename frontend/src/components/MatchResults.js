import React, { Component } from 'react';
import { Tab, Table } from 'react-bootstrap';
import '../cssFiles/DetailResults.css';
import '../cssFiles/MatchResults.css';
import {getMatchResults} from '../API/API_MatchResults'
import DetailResults from './DetailResults';
//Import la liste d'image
import Detroit_Pistons from '../assets/logo_nba/Detroit_Pistons.png'
import New_York_Knicks from '../assets/logo_nba/New_York_Knicks.png'
import Portland_Trail_Blazers from '../assets/logo_nba/Portland_Trail_Blazers.png'
import Sacramento_Kings from '../assets/logo_nba/Sacramento_Kings.png'
import Utah_Jazz from '../assets/logo_nba/Utah_Jazz.png'

export default class MatchResults extends Component {
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: null,
      tableauVar : 260,
      imagesList: [
        {
          name: 'Detroit Pistons',
          cover: Detroit_Pistons
        },
        {
          name: 'New York Knicks',
          cover: New_York_Knicks
        },
        {
          name: 'Portland Trail Blazers',
          cover: Portland_Trail_Blazers
        },
        {
          name: 'Sacramento Kings',
          cover: Sacramento_Kings
        },
        {
          name: 'Utah Jazz',
          cover: Utah_Jazz
        }
      ]
    }
  }

  //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
  componentDidMount()
  {
      this._loadResults()
  }

  _loadResults() {
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
      var {loading, items, tableauVar, imagesList} = this.state;

      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <div>
            <div class="bordure">
              <Table bordered hover >
                <thead className="table_thead">
                  <tr>
                    <th>Logo Home Team</th>
                    <th>Home Team</th>
                    <th>Score</th>
                    <th>Away Team</th>
                    <th>Logo Away Team</th>
                  </tr>
                </thead>
                <tbody>
                    {items.games.slice(260, (tableauVar+5)).map(c => 
                    <DetailResults key={c.id} id={c.id} home={c.home.name} homePoints={c.home_points} 
                    away={c.away.name} awayPoints={c.away_points} logoList={imagesList}/>)}
                </tbody>
              </Table> 
              </div>
            </div>
        );
      }

      }
    
  }

  