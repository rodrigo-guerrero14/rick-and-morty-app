import {useState, useRef} from 'react'
import getCharacters from '../services/getCharacters'
import Character from './Character'

export default function Characters(){
  const [characters, setCharacters] = useState([])
  const [nextPage, setPage] = useState("")
  const [prevPage, setPrevPage] = useState("")
  const myRef = useRef(null)

  let list_characters = getCharacters()
  
  if(nextPage === ""){
    list_characters.then(data => {
      const {results} = data
      const {info} = data
      setCharacters(results)
      setPage(info.next)
    })
  }

  const handleClick = function(){
    list_characters = getCharacters(nextPage)
    list_characters.then(data => {
      const {results} = data
      const {info} = data
      setCharacters(results)
      setPage(info.next)
      setPrevPage(info.prev)
      myRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    })
  }

  const handlePrevClick = function(){
    list_characters = getCharacters(prevPage)
    list_characters.then(data => {
      const {results} = data
      const {info} = data
      setCharacters(results)
      setPage(info.next)
      setPrevPage(info.prev)
      myRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    })
  }

  return(
    <section className="charactersList" id="characterslist" ref={myRef}>
      {characters.map(singleChar => <Character key={singleChar.id} data={singleChar}/>)}

      <div className="buttonsContainer">
        
        {prevPage 
          ? <button onClick={handlePrevClick}>Previous page</button>
          : null}

        <button onClick={handleClick}>Next page</button>
      </div>
    </section>
  )
}