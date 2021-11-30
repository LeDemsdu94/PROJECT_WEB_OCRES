export async function getStanding () {
    const url = 'http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/standings.json?api_key=4x2ttna5rka7awffx5cjvqqp'    
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }