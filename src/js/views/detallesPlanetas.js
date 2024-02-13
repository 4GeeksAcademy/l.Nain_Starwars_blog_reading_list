import React from "react";
import { useState , useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/detalles.css"
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";



export const DetallesPlanetas = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoPlanetas, setInfoPlanetas] = useState("");
    window.scrollTo(0,0)

    useEffect(() => {
    
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
            .then(response => response.json()) // Parsea la respuesta HTTP a formato JSON.
            .then(data => setInfoPlanetas(data.result)) // Actualiza la variable de estado con la información obtenida.
            .catch(error => error); // Captura cualquier error que ocurra durante la solicitud.
    }, []); 

    return (
        <div>
            <div className="espaciado"></div>	
		<div className="encabezado">
			<h3 className= "line-2 anim-typewriter">{infoPlanetas === "" ? "Cargando" : infoPlanetas.description}</h3>
		</div>
            <div className="container cuerpodetalles">
                <div className="row">
                <div className="col-6">
                    <h2>Detalles del planeta</h2>
                    <hr className="hrblanco"></hr>
                </div>
                <div className="col-6">
                <Link to="/">
                    <h6>  
                    <i class="fas fa-backward"></i>Volver a home  </h6>
                   </Link> 
                </div>

                <div className="col-sm-12 col-md-5">
                        <img className="imagendetalles"
                            src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="https://starwars-visualguide.com/assets/img/planets/13.jpg";
                              }}
                        ></img>
                    </div>

                <div className="col-sm-12 col-md-7">
                    <h4><span className="titulo">Name: </span> {infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.name}</h4>
                        <h4><span className="titulo">Diameter: </span> {infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.diameter}</h4>
                        <h4><span className="titulo">Rotation Period:</span> {infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.rotation_period}</h4>
                        <h4><span className="titulo">Orbital Period:</span> {infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.orbital_period}</h4>
                        <h4><span className="titulo">Gravity:</span> {infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.gravity}</h4>                     
                        <h4><span className="titulo">Population: </span>{infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.population}</h4> 
                        <h4><span className="titulo">Climate:</span> {infoPlanetas === "" ? "Cargando" : infoPlanetas.properties.climate}</h4> 
                        
                    </div>

                
                   
                </div>
            </div>
        </div>
    );
};


export default DetallesPlanetas;