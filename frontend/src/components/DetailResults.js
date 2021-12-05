import React from 'react'
import '../cssFiles/DetailResults.css';
import '../cssFiles/home.css'

class DetailResults extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
          }
        }        
  
      render() {         

          return (
              <tr className="table_tr">
                <td><img src={"https://cdn.nba.com/logos/nba/" + this.props.homeTeamId + "/global/L/logo.svg"} height="75" width="75"/></td>
                <td>{this.props.home}</td>
                <td>{this.props.homePoints} - {this.props.awayPoints}</td>
                <td>{this.props.away}</td>
                <td><img src={"https://cdn.nba.com/logos/nba/" + this.props.awayTeamId + "/global/L/logo.svg"} height="75" width="75"/></td>
              </tr>             
          )
      }
  }
  
  
  
  //Exportation du component JoueurItem
  export default DetailResults