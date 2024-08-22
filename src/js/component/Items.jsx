import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export default function Items({ people, category, img }) {
  const { store, actions } = useContext(Context);
  const peopleWithCategory = { ...people, category };
  const [value, setValue] = useState(false);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(store.favourites));

    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    if (favourites.find(character => character.name === people.name)) {
      setValue(true);
    }else{
      setValue(false);
    }
  }, [store.favourites, people.uid]);

  return (
    <div className="card" style={{ width: '18rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/${img}/${people.uid}.jpg`}
        className="card-img-top rounded-top"
        alt={people.name}
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <div className="card-body">
        <h5 className="card-title mb-3">{people.name}</h5>
        <p className="card-text text-muted mb-4">
          {category.toUpperCase()}
        </p>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <Link
            to={`/Details/${category}/${people.uid}`}
            className="btn btn-primary"
          >
            More Details
          </Link>
          <div className="ms-3" onClick={() => actions.addFavourites(peopleWithCategory)} role="button">
            <i className={`fas fa-heart ${value ? "text-danger" : "text-secondary"} border border-dark rounded-circle p-2 fs-3`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
