import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid header">
			<div className="row">
				<div className="col-md-9 col-sm-12 imagenLogo">
					<div>
						<Link to={`/`}>	<img className="imgStarWars" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"></img> </Link>
					</div>
				</div>
				<div className="col-md-3 col-sm-12 favoritos">
					<div className="dropdown">
						<div class="frame">
							<button className="btndropdown btn draw-border dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favoritos {store.favoritos.length}
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								{store.favoritos.map((item, index) => {
									return (
										<li className="lista d-flex"
											key={index}>
											<p id="parrafo">{item}</p>
											<i className="fas fa-trash" onClick={() => actions.botonEliminarFavoritos(index)}></i>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};
/*

<div class="wrapper four">
		<div class="type">
			<h3 class="typing">STAR WARS </h3>
		</div>
	</div>

*/