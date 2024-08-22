import React from 'react'

export default function ObjectDetails({value,params}) {
  return (
    <div className="w-100">
          <div className="row featurette m-3 p-4 bg-light rounded shadow-sm">
            <div className="col-12 col-md-7 order-2 order-md-2">
              <h2 className="featurette-heading display-4 text-primary">
                {value.name}
              </h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur, accusamus enim ullam earum, dolores odit cum numquam officiis illum sapiente itaque vitae, dolor voluptatum? Commodi natus veniam libero provident!
              </p>
            </div>
            <div className="col-12 col-md-5 order-1 order-md-1 text-center">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid rounded-circle shadow-lg"
                width={400}
                height={400}
                alt={value.name}
                src={`https://starwars-visualguide.com/assets/img/${params.category === "people" ? "characters" : params.category}/${params.id}.jpg`}
              />
            </div>
          </div>

          <footer className="row py-5 my-5 border-top">
            <div className="col-12 d-flex flex-wrap justify-content-between">
              <div className="mb-2 flex-fill">
                <h5 className="text-danger fs-3">Name</h5>
                <ul className="nav flex-column">
                  <li className="nav-item text-danger fs-3">{value.name}</li>
                </ul>
              </div>

              <div className="mb-2 flex-fill">
                <h5 className="text-danger fs-3">Birth Year</h5>
                <ul className="nav flex-column">
                  <li className="nav-item text-danger fs-3">{value.birth_year}</li>
                </ul>
              </div>

              <div className="mb-2 flex-fill">
                <h5 className="text-danger fs-3">Gender</h5>
                <ul className="nav flex-column">
                  <li className="nav-item text-danger fs-3">{value.gender}</li>
                </ul>
              </div>

              <div className="mb-2 flex-fill">
                <h5 className="text-danger fs-3">Height</h5>
                <ul className="nav flex-column">
                  <li className="nav-item text-danger fs-3">{value.height}</li>
                </ul>
              </div>

              <div className="mb-2 flex-fill">
                <h5 className="text-danger fs-3">Skin Color</h5>
                <ul className="nav flex-column">
                  <li className="nav-item text-danger fs-3">{value.skin_color}</li>
                </ul>
              </div>

              <div className="mb-2 flex-fill">
                <h5 className="text-danger fs-3">Eye Color</h5>
                <ul className="nav flex-column">
                  <li className="nav-item text-danger fs-3">{value.eye_color}</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
  )
}
