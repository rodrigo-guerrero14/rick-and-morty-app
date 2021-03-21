import {Link} from 'wouter'

export default function Header(){
  return (
    <header className="header" id="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list-chars">Lista de personajes</Link></li>
          <li><Link to="/search">Buscador</Link></li>
        </ul>
      </nav>
    </header>
  )
}