//Fonction demandant une requête api pour obtenir la liste de tous les joueurs
export async function getResults () {
    const url = 'http://data.nba.net/10s/prod/v1/20211203/scoreboard.json'    
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }