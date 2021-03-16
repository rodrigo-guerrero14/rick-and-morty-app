export default function Character({data}){
  const {name, id, status, image, gender} = data
  // data.origin.name - species - location.name - created
    console.log(data)
    return(
      <article key={id} className="character">
        <h3>{name}</h3>
        <img src={image} alt={`${name} pic`}/>

        <div className="details">
          <p><span>State: </span>{status}</p>
          <p><span>Gender: </span>{gender}</p>
        </div>
      </article>
    )

}