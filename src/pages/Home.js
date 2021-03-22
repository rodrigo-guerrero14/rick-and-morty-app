import logo from '../img/rick_and_morty_logo.png'

export default function Home(){
    return (
        <>
        <picture className="logo-container">
            <img src={logo} className="logo"></img>
        </picture>
        </>
    )
}