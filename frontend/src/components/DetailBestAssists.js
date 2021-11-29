import React from 'react'
import '../cssFiles/DetailRanking.css';
import '../cssFiles/home.css'

class DetailBestScorer extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
          }
        }        
  
      render() {         
          return (
              <tr className="table_tr">
                <td>{this.props.rank}</td>
                <td>{this.props.name}</td>
                <td>{this.props.teamMarket} {this.props.teamName}</td>
                <td>{this.props.assists}</td>
              </tr>             
          )
      }
  }
  
  
  
  //Exportation du component 
  export default DetailBestScorer