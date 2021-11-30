import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../cssFiles/DetailResults.css';
import '../cssFiles/MatchResults.css';
import {getLeagueLeaders} from '../API/API_LeagueLeaders.js'
import DetailBestScorer from './DetailBestScorer';

export default class BestScorer extends Component {
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: null,
      bestScorer: [],
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
        bestScorer: [ ...this.state.bestScorer, ...data.categories[1].ranks].slice(0, 5),
        })

      sessionStorage.setItem("bestScorers",JSON.stringify(this.state.bestScorer))
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
              <Table bordered hover >
                <thead className="table_thead">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.bestScorer.map(c => 
                    <DetailBestScorer key={c.id} rank={c.rank} name={c.player.full_name} 
                    teamMarket={c.teams[0].market} teamName={c.teams[0].name}
                    points={c.average.points}/>)}
                </tbody>
              </Table> 
              </div>
               <a href="/statsJoueurs/graphscorers">See their stats</a>
            </div>
        );
      }

      }
    
  }

  