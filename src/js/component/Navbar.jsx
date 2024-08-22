import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export default function Navbar() {
  const {actions,store}=useContext(Context)
  
  useEffect(() => {
    console.log(store.favourites.length);
  }, [store.favourites]);

  return (
    <nav className="navbar bg-body-tertiary py-2">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png"
            alt="Star Wars Logo"
            className="img-fluid"
            style={{ maxWidth: '120px', height: 'auto' }}
          />
        </Link>
        
        <div className="dropdown ms-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos ({store.favourites.length})
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton"
            style={{ minWidth: '128px' }}
          >
            {store.favourites.length > 0 ? (
              store.favourites.map((character) => (
                <li key={character.uid}>
                  <i className="fa-solid fa-trash" onClick={() => actions.deleteFavourite(character)}></i>
                  <Link to={`/Details/${character.category}/${character.uid}`} className="text-decoration-none" >
                    {character.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No hay favoritos</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
