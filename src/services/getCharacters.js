const URL_API = "https://rickandmortyapi.com/api/character"

function getCharacters(){
  return fetch(URL_API)
  .then(response => response.json())
  .then(data => data.results)
}

export default getCharacters