import React from 'react';
// paquetes
import { Helmet } from 'react-helmet';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import BotonRegresar from '../elements/BotonRegresar';
// components
import BarraTotalGastos from './BarraTotalGastos';
// hooks
// import useObtenerGastoMes from '../hooks/useObtenerGastoMes';

const GastosCategoria = () => {

	
	return (
		<>
			<Helmet>
				<title>Categoria</title>
			</Helmet>
			<Header>
				<ContenedorHeader>
					<BotonRegresar />
					<Titulo>Categoria de gastos</Titulo>
				</ContenedorHeader>
			</Header>
			<BarraTotalGastos/>
		</>
	);
};

export default GastosCategoria;
