import pic404 from '../img/rick_and_morty_404.png'

export default function NotFound(){
    return(
        <article className="notFound">
            <h2>Personaje no encontrado !</h2>
            <img src={pic404}></img>
        </article>
    )
}