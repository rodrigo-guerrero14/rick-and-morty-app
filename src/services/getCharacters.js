function getCharacters(URL_API="https://rickandmortyapi.com/api/character"){
  return fetch(URL_API)
  .then(response => response.json())
  .then(data => data)
}

export default getCharacters