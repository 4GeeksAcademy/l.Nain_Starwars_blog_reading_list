import React from "react";
import "../../styles/home.css";
import { Personajes } from "./personajes";
import { Planetas } from "./planetas";
import { Vehiculos } from "./vehiculos";
import { useState, useEffect } from "react";




export const Home = () => {
	const [showPlanetas, setPlanetas] = useState(false);
	const [showVehiculos, setVehiculos] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Verifica la posición del scroll en relación con la parte superior de la página
			const scrollPosition = window.scrollY;

			// Puedes ajustar estas posiciones según tus necesidades
			const planetsOffset = 600; // Cuando mostrar Planetas
			const vehiclesOffset = 1100; // Cuando mostrar Vehiculos

			if (scrollPosition >= planetsOffset) {
				setPlanetas(true);
			}

			if (scrollPosition >= vehiclesOffset) {
				setVehiculos(true);
			}
		};

		// Agregar un evento de scroll al montar el componente
		window.addEventListener("scroll", handleScroll);

		// Limpieza del evento al desmontar el componente
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div >
			<div className="espaciado"></div>
			<div className="encabezado">
				<h2 className="line-1 anim-typewriter">Personajes</h2>
			</div>
		
				<Personajes />
		


			{showPlanetas && (
				<div className="encabezado-planetas-vehiculos">
					<h6 className="line-1 anim-typewriter">Planetas</h6>
				</div>
			)}

			<Planetas />

			{showVehiculos && (
				<div className="encabezado-planetas-vehiculos">
					<h6 className="line-1 anim-typewriter">Vehiculos</h6>
				</div>
			)}
			<Vehiculos />
		</div>
	);
};