import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../cssFiles/DetailResults.css';
import '../cssFiles/MatchResults.css';
import {getLeagueLeaders} from '../API/API_LeagueLeaders.js'
import DetailBestRebounder from './DetailBestRebounder';

export default class BestScorer extends Component {
  //Constructeur : intialisation de chaque paramètre du state utilisés
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: null,
      bestRebounder: [],
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
        bestRebounder: [ ...this.state.bestRebounder, ...data.categories[29].ranks].slice(0, 5),
        })
        sessionStorage.setItem("bestRebounders",JSON.stringify(this.state.bestRebounder))
      })
  }

    render() {
      var {loading} = this.state;
      if(!loading)
      {
        return <div>Loading...</div>;
      }
      else{
        return (
          <div>
            <div class="bordure">
              <Table responsive bordered hover >
                <thead className="table_thead">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Rebounds</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.bestRebounder.map(c => 
                    <DetailBestRebounder key={c.id} rank={c.rank} name={c.player.full_name} 
                    teamMarket={c.teams[0].market} teamName={c.teams[0].name}
                    rebounds={c.average.rebounds}/>)}
                </tbody>
              </Table> 
              </div><br/><br/>
              <a className="link" href="/statsJoueurs/graphrebounders">See their stats</a><br/><br/>
            </div>
        );
      }

      }
    
  }

  