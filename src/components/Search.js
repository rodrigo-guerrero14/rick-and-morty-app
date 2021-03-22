import {useState} from 'react'
import getCharacter from '../services/getCharacter'
import Character from './Character'
import NotFound from './NotFound'

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
        
      <form action="" onSubmit={handleSubmit}>
        <input type="text"onChange={handleChange} placeholder="Búsqueda por IDs, 1 - 900"/>
        <button>Buscar</button>
      </form>

      { char.error
      ? <NotFound></NotFound>
      : <Character data={char}></Character>}
    </section>
  )
}