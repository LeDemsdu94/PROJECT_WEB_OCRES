import React from 'react'
import '../cssFiles/DetailRanking.css';

class DetailRanking extends React.Component {

    //Constructeur : intialisation de chaque paramètre du state utilisés
      constructor(props) {
          super(props)
          this.state = {
          }
        }
  
        //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
        /*componentDidMount()
        {
            this.setState({teams: this.props.data})
        }*/
  
        
  
      render() {
  
          //Attribution du bon poste en fonction de la valeur de ultraPosition
          
  
          //Affichage de chaque élément de la FlatList du component JoueursListe
          return (
            
              /*<View style={styles.playerContainer}> 
                  <Image style={styles.logo} source={{uri: urlJersey,}}/>
                  <Text style={styles.lastName}>{joueur.lastName}</Text>
                  <Text style={styles.others}>{noteRounded}</Text>
                  <Text style={styles.others}>{buts}</Text>
                  <Text style={styles.others}>{poste}</Text>
                  <Text style={styles.others}>{joueur.quotation}</Text>
              </View>*/
              <p>
                <span class="rank">
                  {this.props.rank} 
                </span>
                <span class="name">
                  {this.props.name} 
                </span>
                <span class="market">
                  {this.props.market}
                </span>
                
              </p>
          )
      }
  }
  
  
  
  //Exportation du component JoueurItem
  export default DetailRanking