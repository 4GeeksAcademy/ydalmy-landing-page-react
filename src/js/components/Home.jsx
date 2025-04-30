import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";

//create your first component
const Home = () => {
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Boostrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Service</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>



      </div>
      <div className="container-fluid">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="container-fluid footer">
        <div className="row">
          <p className="text-center">Copyrith @ Your Website 2025</p>
        </div>
      </div>


    </>




  );
};

export default Home;