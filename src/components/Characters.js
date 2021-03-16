import {useState} from 'react'
import getCharacters from '../services/getCharacters'
import Character from './Character'

const results = getCharacters()

export default function Characters(){
  const [characters, setCharacters] = useState([])
  results.then(data => setCharacters(data))

  return(
    <section className="charactersList">
      {characters.map(singleChar => <Character data={singleChar}/>)}
    </section>
  )
}