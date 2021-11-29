import React, {ListItem} from 'react';
import {Table} from 'react-bootstrap';
import {getTeams, getTeamStatistics } from '../API/API_TeamStatistics'

import '../cssFiles/Ranking.css';
import DetailTeamStatistics from './DetailTeamStatistics';

class TeamStatistics extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
            teams: []
          }
        }
  
        //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
        componentDidMount()
        {
            this._loadTeams()
            //console.log(this.state.teamsEastern)
        }

        _loadTeams() {
          getTeams().then(data => {
            //console.log(data)
            //console.log(data.conferences[1])
            this.setState({
              teams: [ ...this.state.teams, ...data.conferences[0].divisions[0].teams, ...data.conferences[0].divisions[1].teams, ...data.conferences[0].divisions[2].teams, ...data.conferences[1].divisions[0].teams, ...data.conferences[1].divisions[1].teams, ...data.conferences[1].divisions[2].teams],
              
            })
            console.log(this.state.teams)
            //console.log(this.state.teamsWestern)
          })
        }

  

      render() {
          return (
            <div class="wraper">
            <h1>Western Conference Top 5</h1> <br/>
            <div class="easternRanking">
            <Table striped bordered hover>
              <thead className="table_thead">
                <tr>
                  <th class="col-md-1">Team</th>
                  <th class="col-md-2">Stats</th>
                  <th class="col-md-1">W</th>
                  <th class="col-md-1">L</th>
                  <th class="col-md-1">%</th>
                  <th class="col-md-1">PF</th>
                  <th class="col-md-1">PA</th>
                  <th class="col-md-1">+/-</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.teams.map
                  (c => <DetailTeamStatistics key={c.id} id={c.id} teams={c.teams}/>)}
              </tbody>
            </Table>
                </div> 
              </div>
          )
        }
  }

  export default TeamStatistics