import React from 'react'
import {Table} from 'react-bootstrap'
import '../cssFiles/Ranking.css';

class DetailTeamStatistics extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
              stats: []
          }
        }
  
        //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
        componentDidMount()
        {
            
          this._getTeamStatistics().then(data => {
            //console.log(data)
            this.setState({
              //stats: [ ...this.state.stats, ...Object.entries(data.own_record.average)],
              
            })
            //console.log(data.opponents)
            console.log(data)
            
            //console.log(data)
            //console.log(this.state.stats)
          })
        }

        async _getTeamStatistics () {
            const url = 'http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/teams/'
            +this.props.id+'/statistics.json?api_key=dtvujbnn7kjatymcbu4htqqg'    
            return await fetch(url,
                {
                  method: 'GET',
                  //headers: {
                    //"Content-Type": "application/json"
                  //}
                })
            .then((response) => response.json())
            .catch((error) => console.error(error))
          }
  
        
  
      render() {

        var name=" "
        /*var nbLosses=" "
        var percent=" "
        var pf=" "
        var pa=" "
        var diff=" "*/
        /*this.state.standingsEastern.forEach((team) => {
            if (this.props.id==team.id) {
                nbWins=team.wins
                nbLosses=team.losses
                percent=team.win_pct
                pf=team.points_for
                pa=team.points_against
                diff=team.point_diff

            }
        })*/
          return (
            
              //console.log(this.props),
              
                  <tr className="table_tr">
                    <td class="col-md-1">{this.props.id} </td>
                    <td class="col-md-2">{this.props.id}</td>
                    <td class="col-md-1">{this.props.id}</td>
                    <td class="col-md-1">{this.props.id}</td>
                    <td class="col-md-1">{this.props.id}</td>
                    <td class="col-md-1">{this.props.id}</td>
                    <td class="col-md-1">{this.props.id}</td>
                    <td class="col-md-1">{this.props.id}</td>
                  </tr>
                  
          )
      }
  }
  
  
  
  //Exportation du component JoueurItem
  export default DetailTeamStatistics