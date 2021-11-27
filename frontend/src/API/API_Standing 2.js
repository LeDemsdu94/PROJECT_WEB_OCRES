export function getStanding () {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/standings.json?api_key=dtvujbnn7kjatymcbu4htqqg'    
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }