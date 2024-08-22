import React, { useContext } from 'react';
import { Context } from '../store/appContext.js';
import Items from './Items.jsx';
import '../../styles/scroll.css'

export default function List() {
  const { store } = useContext(Context);

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4">People</h2>
        <div className="overflow-auto scrollbar-visible" style={{ whiteSpace: 'nowrap' }}>
          <ul className="d-inline-flex list-unstyled p-0 m-0">
            {store.people.length > 0 && store.people.map(people => (
              <li className="me-3" key={people.uid} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <Items people={people} category={"people"} img={"characters"} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="mb-4">Planets</h2>
        <div className="overflow-auto scrollbar-visible" style={{ whiteSpace: 'nowrap' }}>
          <ul className="d-inline-flex list-unstyled p-0 m-0">
            {store.planets.length > 0 && store.planets.map(planet => (
              <li className="me-3" key={planet.uid} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <Items people={planet} category={"planets"} img={"planets"} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="mb-4">Vehicles</h2>
        <div className="overflow-auto scrollbar-visible" style={{ whiteSpace: 'nowrap' }}>
          <ul className="d-inline-flex list-unstyled p-0 m-0">
            {store.vehicles.length > 0 && store.vehicles.map(vehicle => (
              <li className="me-3" key={vehicle.uid} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <Items people={vehicle} category={"vehicles"} img={"vehicles"} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
