//Fonction demandant une requête api pour obtenir la liste de tous les joueurs

export async function getMatchResults () {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/games/2021/REG/schedule.json?api_key=4x2ttna5rka7awffx5cjvqqp';
  return await fetch(url,
    {
      credentials: 'include',
      method: 'GET',})
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }