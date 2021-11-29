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
        var logo_NBA_home=" "
        var logo_NBA_away=" "
        console.log(this.props);
        console.log(this.props.logoList);

        this.props.logoList.forEach(element => {
          if (this.props.home==element.name) {
            logo_NBA_home=this.props.logoList.cover
          }
          if(this.props.away==element.name){
            logo_NBA_away=this.props.logoList.cover
          }
        });

          return (
              <tr className="table_tr">
                <td><img src={this.props.logoList[0].cover} width="80" height="70" /></td>
                <td>{this.props.home}</td>
                <td>{this.props.homePoints} - {this.props.awayPoints}</td>
                <td>{this.props.away}</td>
                <td>{logo_NBA_away}</td>
              </tr>             
          )
      }
  }
  
  
  
  //Exportation du component JoueurItem
  export default DetailResults