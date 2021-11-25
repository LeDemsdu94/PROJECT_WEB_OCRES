import React from 'react';
import {getRanking} from '../API/API_Ranking.js'




class Ranking extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
          }
        }
  
        //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
        componentDidMount()
        {
            getRanking().then(data => {
                console.log(data)
              })
        }
  
        
  
      render() {
          return (
            <div>
                <h2>ATP Ranking</h2>
                <p>Coin coin je t'aime</p>
            </div>
          )
      }
  }

  export default Ranking