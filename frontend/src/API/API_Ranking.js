//Fonction demandant une requête api pour obtenir la liste de tous les joueurs
export function getRanking () {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/rankings.json?api_key=dtvujbnn7kjatymcbu4htqqg'    
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }