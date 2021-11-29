export async function getRanking () {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/rankings.json?api_key=dtvujbnn7kjatymcbu4htqqg'    
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

  /*export async function getRanking () {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/rankings.json?api_key=dtvujbnn7kjatymcbu4htqqg'    
    const response = await fetch(url)
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }*/