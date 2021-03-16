const URL_API = "https://rickandmortyapi.com/api/character"

export default function getCharacters(keyword){
  return fetch(`${URL_API}/${keyword}`)
  .then(response => response.json())
  .then(data => data)
}