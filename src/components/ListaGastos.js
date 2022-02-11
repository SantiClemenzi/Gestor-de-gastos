import React from 'react';
// paquetes
import { Helmet } from 'react-helmet';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import BotonRegresar from '../elements/BotonRegresar';

const ListaGastos = () => {
	return (
		<>
			<Helmet>
				<title>Lista de gasto</title>
			</Helmet>
			<Header>
				<ContenedorHeader>
					<BotonRegresar />
					<Titulo>Lista de gastos</Titulo>
				</ContenedorHeader>
			</Header>
		</>
	);
};

export default ListaGastos;
