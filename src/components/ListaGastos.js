import React from 'react';
// paquetes
import { Helmet } from 'react-helmet';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import BotonRegresar from '../elements/BotonRegresar';
// components
import BarraTotalGastos from './BarraTotalGastos';
// hook
// import { useAuth } from '../contexts/AuthContext';
import useObtenerGastos from './../hooks/useObtenerGastos';

const ListaGastos = () => {
	const [gastos] = useObtenerGastos();
	console.log(gastos);
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
			<BarraTotalGastos/>
		</>
	);
};

export default ListaGastos;
