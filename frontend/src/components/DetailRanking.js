import React from 'react'
import {Table} from 'react-bootstrap'
import {getStanding} from '../API/API_Standing'
import '/Users/henripetrelli/Desktop/PROJECT_WEB_OCRES/frontend/src/cssFiles/Ranking.css';

import '../cssFiles/Ranking.css';

class DetailRanking extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
            standingsWestern: [],
            standingsEastern: []
          }
        }
  
        //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
        componentDidMount()
        {
          getStanding().then(data => {
            //console.log(data)
            this.setState({
              standingsEastern: [ ...this.state.standingsWestern, ...data.conferences[0].divisions[0].teams, ...data.conferences[0].divisions[1].teams, ...data.conferences[0].divisions[2].teams],
              
              standingsWestern: [...this.state.standingsEastern, ...data.conferences[1].divisions[0].teams, ...data.conferences[1].divisions[1].teams, ...data.conferences[1].divisions[2].teams]
            })
            //console.log(this.state.standingsEastern)
            //console.log(this.state.standingsWestern)
          })
        }
  
        
  
      render() {

        var nbWins=" "
        var nbLosses=" "
        var percent=" "
        var pf=" "
        var pa=" "
        var diff=" "
        this.state.standingsEastern.forEach((team) => {
            if (this.props.id==team.id) {
                nbWins=team.wins
                nbLosses=team.losses
                percent=team.win_pct
                pf=team.points_for
                pa=team.points_against
                diff=team.point_diff

            }
        })
        this.state.standingsWestern.forEach((team) => {
          if (this.props.id==team.id) {
            nbWins=team.wins
            nbLosses=team.losses
            percent=team.win_pct
            pf=team.points_for
            pa=team.points_against
            diff=team.point_diff
          }
      })
  
          return (
            
              //console.log(this.props),
              
                  <tr className="table_tr">
                    <td class="col-md-1">{this.props.rank} </td>
                    <td class="col-md-2">{this.props.name}</td>
                    <td class="col-md-1">{nbWins}</td>
                    <td class="col-md-1">{nbLosses}</td>
                    <td class="col-md-1">{percent}</td>
                    <td class="col-md-1">{pf}</td>
                    <td class="col-md-1">{pa}</td>
                    <td class="col-md-1">{diff}</td>
                  </tr>
                  
          )
      }
  }
  
  
  
  //Exportation du component JoueurItem
  export default DetailRanking