import React from 'react';
// paquetes
import { Helmet } from 'react-helmet';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import BotonRegresar from '../elements/BotonRegresar';

const InicioSesion = () => {
	return (
		<>
			<Helmet>
				<title>Iniciar Sesion</title>
			</Helmet>
			<Header>
				<ContenedorHeader>
					<BotonRegresar />
					<Titulo>Iniciar Sesion</Titulo>
				</ContenedorHeader>
			</Header>
		</>
	);
};

export default InicioSesion;
