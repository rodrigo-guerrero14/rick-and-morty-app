import {useState} from 'react'
import getCharacter from '../services/getCharacter'
import Character from './Character'

export default function Search(){
  const [keyword, setKeyword] = useState("")
  const [char, setChar] = useState({})

  const handleChange = function(event){
    setKeyword(event.target.value)
  }

  const handleSubmit = function(event){
    event.preventDefault()
    const data = getCharacter(keyword)
    data.then(singleData => setChar(singleData))
  }

  return (
    <section className="searcher">
      <h2>Searcher</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">ID</label>
        <input type="text"onChange={handleChange} placeholder="Ejemplo: 1"/>
        <button>Buscar</button>
      </form>

      <Character data={char}></Character>
    </section>
  )
}