export async function getTeams() {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/league/hierarchy.json?api_key=dtvujbnn7kjatymcbu4htqqg'    
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

  
