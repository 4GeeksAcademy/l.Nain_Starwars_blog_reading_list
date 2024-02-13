import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehiculos = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
          <div className="row flex-row flex-nowrap overflow-auto mb-3  m-auto "style={{overflow:"scroll", width:"70rem"}}>
        {store.vehiculos.map((item) => {
          return (
            <div key={item.uid} className="col-2 d-flex">
              <div className="card mb-5">
                <Link to={`/detallesvehiculo/${item.uid}`}>
                  <img
                    className="card-img-top"
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h3 className="text-white">{item.name}</h3>
                </div>
                <div className="d-flex  justify-content-between p-2">
                  <div className="info"><Link to={`/detallesvehiculo/${item.uid}`}>
                    <p id="enlace">  Más información</p>
                  </Link>
                  </div>
                  <div>
                    <i className=" text-danger fas fa-heart" onClick={() => actions.incluirFavoritos(item.name)}></i>
                  </div>
                  </div>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehiculos;