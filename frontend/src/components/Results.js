import React, { Component } from 'react';
import { Tab, Table } from 'react-bootstrap';
import '../cssFiles/DetailResults.css';
import '../cssFiles/MatchResults.css';
import {getResults} from '../API/API_Results'
import DetailResults from './DetailResults';

export default class Results extends Component {
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: null,
    }
  }

  //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
  componentDidMount()
  {
      this._loadResults()
  }

  _loadResults() {
    getResults().then(data => {
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
      var {loading, items} = this.state;

      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{

        return (
          <div>
            <div class="bordure">
              <Table reponsive bordered hover >
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
                    {items.games.map(c => 
                    <DetailResults key={c.id} id={c.id} home={c.hTeam.triCode} homePoints={c.hTeam.score}
                    homeTeamId={c.hTeam.teamId} 
                    away={c.vTeam.triCode} awayPoints={c.vTeam.score} awayTeamId={c.vTeam.teamId} />)}
                </tbody>
              </Table> 
              </div>
            </div>
        );
      }

      }
    
  }

  