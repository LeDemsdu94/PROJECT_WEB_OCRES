import React from 'react'
import '../cssFiles/DetailRanking.css';
import '../cssFiles/home.css'

class DetailResults extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
          }
        }        
  
      render() {          
          //Affichage de chaque élément de la FlatList du component JoueursListe
          return (
              <tr className="table_tr">
                <td>LOGO</td>
                <td>{this.props.home}</td>
                <td>{this.props.homePoints} - {this.props.awayPoints}</td>
                <td>{this.props.away}</td>
                <td>LOGO</td>
              </tr>             
          )
      }
  }
  
  
  
  //Exportation du component JoueurItem
  export default DetailResults