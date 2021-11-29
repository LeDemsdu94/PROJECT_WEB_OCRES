import React, {ListItem} from 'react';
import {Table} from 'react-bootstrap';
import {getRanking} from '../API/API_Ranking.js'
import DetailRanking from './DetailRanking.js';

import '../cssFiles/Ranking.css';


class Ranking extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
            teamsWestern: [],
            teamsEastern: [],
          }
        }
  
        //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
        componentDidMount()
        {
            this._loadRanking()
            //console.log(this.state.teamsEastern)
        }

        _loadRanking() {
          getRanking().then(data => {
            
            //console.log(data.conferences[1])
            this.setState({
              teamsEastern: [ ...this.state.teamsWestern, ...data.conferences[0].divisions[0].teams, ...data.conferences[0].divisions[1].teams, ...data.conferences[0].divisions[2].teams].sort(function(a, b) {
                return a.rank.conference - b.rank.conference;
                }),
              teamsWestern: [...this.state.teamsEastern, ...data.conferences[1].divisions[0].teams, ...data.conferences[1].divisions[1].teams, ...data.conferences[1].divisions[2].teams].sort(function(a, b) {
                return a.rank.conference - b.rank.conference;
                })
            })
            //console.log(this.state.teamsEastern)
            //console.log(this.state.teamsWestern)
          })
        }

  

      render() {
          return (
            <div class="wraper">
              <h1>NBA Rankings</h1>
              <h3 className="titre" > Eastern Conference</h3> <br/>
              <div class="easternRanking">
              <Table striped bordered hover>
                <thead className="table_thead">
                  <tr>
                    <th class="col-md-1">Rank</th>
                    <th class="col-md-2">Team</th>
                    <th class="col-md-1">W</th>
                    <th class="col-md-1">L</th>
                    <th class="col-md-1">%</th>
                    <th class="col-md-1">PF</th>
                    <th class="col-md-1">PA</th>
                    <th class="col-md-1">+/-</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.teamsEastern.map
                    (c => <DetailRanking key={c.id} id={c.id} rank={c.rank.conference} name={c.name} 
                    market={c.market}/>)}
                </tbody>
              </Table>
                  </div> <br/> <br/>
              <h3 className="titre" > Western Conference</h3> <br/>
              <div class="westernRanking">
              <Table striped bordered hover>
                <thead> 
                  <tr className="table_thead">
                    <th class="col-md-1">Rank</th>
                    <th class="col-md-2">Team</th>
                    <th class="col-md-1">W</th>
                    <th class="col-md-1">L</th>
                    <th class="col-md-1">%</th>
                    <th class="col-md-1">PF</th>
                    <th class="col-md-1">PA</th>
                    <th class="col-md-1">+/-</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.teamsWestern.map
                    (c => <DetailRanking key={c.id} id={c.id} rank={c.rank.conference} name={c.name} 
                    market={c.market}/>)}
                </tbody>
              </Table>
                   </div> 

                </div>
          )
      }
  }

  export default Ranking