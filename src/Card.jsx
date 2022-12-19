const Card=(props)=>{
    return (
      <div className="d-flex justify-content-center container-fluid">
        <div className="card bg-dark">
          <img className="d-block w-100 card-img" src={props.url} alt={props.alt} />
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;