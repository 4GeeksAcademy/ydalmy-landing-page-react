import React from "react";
import musica from "../../img/musica.jpg";

 export const Card =() =>{
    return(
        <div className="card col-xs-12 col-md-6 col-lg-3"> 
        <img src={musica} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )

}