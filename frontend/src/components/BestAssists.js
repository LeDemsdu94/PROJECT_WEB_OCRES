import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../cssFiles/DetailResults.css';
import '../cssFiles/MatchResults.css';
import {getLeagueLeaders} from '../API/API_LeagueLeaders.js'
import DetailBestAssists from './DetailBestAssists';

export default class BestScorer extends Component {
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: null,
      bestAssists: [],
    }
  }

  //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
  componentDidMount()
  {
      this._loadResults()
  }

  _loadResults() {
    getLeagueLeaders().then(data => {
      console.log(data)
      this.setState({
        loading: true,
        items: data,
        bestAssists: [ ...this.state.bestAssists, ...data.categories[30].ranks].slice(0, 5),
        })
        sessionStorage.setItem("bestAssists",JSON.stringify(this.state.bestAssists))
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
            <div class="bordure">
              <Table reponsive bordered hover >
                <thead className="table_thead">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Assists</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.bestAssists.map(c => 
                    <DetailBestAssists key={c.id} rank={c.rank} name={c.player.full_name} 
                    teamMarket={c.teams[0].market} teamName={c.teams[0].name}
                    assists={c.average.assists}/>)}
                </tbody>
              </Table> 
              </div>
              <a href="/statsJoueurs/graphassists">See their stats</a>
            </div>
        );
      }

      }
    
  }

  