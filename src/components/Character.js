export default function Character({data}){
  const {name, id, status, image, gender, created, origin} = data
  const locationName = origin.name
    
    return(
      <article key={id} className="character">
        <div className="background-name">{name}</div>
        <h3>{name}</h3>
        <img src={image} alt={`${name} pic`}/>

        <div className="details">
          <p><span>Status: </span>{status}</p>
          <p><span>Gender: </span>{gender}</p>
          <p><span>Created: </span>{created.slice(0,10)}</p>
          <p><span>Origin: </span>{locationName}</p>
        </div>
      </article>
    )

}