//Fonction demandant une requête api pour obtenir la liste de tous les joueurs
export async function getLeagueLeaders () {
    const url = 'https://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/leaders.json?api_key=4x2ttna5rka7awffx5cjvqqp'    
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }