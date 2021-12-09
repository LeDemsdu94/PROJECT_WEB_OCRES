//Fonction demandant une requête api pour obtenir la liste de tous les joueurs
export async function getShop () {
    const url = 'http://localhost:3001/api/shop'    
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }