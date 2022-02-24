import React from 'react';
// paquetes
import { Helmet } from 'react-helmet';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import BotonRegresar from '../elements/BotonRegresar';
import {
	ListaDeCategorias,
	ElementoListaCategorias,
	Categoria,
	Valor,
} from './../elements/ElementoLista';
// components
import BarraTotalGastos from './BarraTotalGastos';
// hooks
import useObtenerGastosPorCategoria from '../hooks/useObtenerGastosPorCAtegoria';
// funciones
import convertirMoneda from './../funciones/convertirMoneda';
// icono svg
import IconoCategoria from '../elements/IconoCategoria';

const GastosCategoria = () => {
	const gastos = useObtenerGastosPorCategoria();
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
			<ListaDeCategorias>
				{gastos.map((elemento, index) => {
					return (
						<ElementoListaCategorias key={index}>
							<Categoria>
								<IconoCategoria nombre={elemento.categoria} />
								{elemento.categoria}
							</Categoria>
							<Valor>{convertirMoneda(elemento.cantidad)}</Valor>
						</ElementoListaCategorias>
					);
				})}
			</ListaDeCategorias>
			<BarraTotalGastos />
		</>
	);
};

export default GastosCategoria;
