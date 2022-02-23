import React from 'react';
// paquetes
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
// elements
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import BotonRegresar from '../elements/BotonRegresar';
import {
	Lista,
	ElementoLista,
	Categoria,
	Descripcion,
	Valor,
	Fecha,
	ContenedorBotones,
	BotonAccion,
	BotonCargarMas,
	ContenedorBotonCentral,
	ContenedorSubtitulo,
	Subtitulo,
} from './../elements/ElementoLista';
import IconoCategoria from './../elements/IconoCategoria';
import Boton from './../elements/Boton';
// components
import BarraTotalGastos from './BarraTotalGastos';
// hook
import useObtenerGastos from './../hooks/useObtenerGastos';
// funciones
import convertirMoneda from './../funciones/convertirMoneda';
// firebase
import eliminarGasto from '../firebase/eliminarGasto';
// iconos
import { ReactComponent as IconoEdit } from './../images/editar.svg';
import { ReactComponent as IconoDelete } from './../images/borrar.svg';

const ListaGastos = () => {
	const [gastos, cargarMasGastos, hayMasPorCargar] = useObtenerGastos();
	// transformamos el formato de la fecha
	const formatoFecha = (fecha) => {
		return format(fromUnixTime(fecha), "dd 'de' MMMM 'del' yyyy", {
			locale: es,
		});
	};
	// verificamos si se repite la fecha
	const fechaRepetida = (gastos, index, gasto) => {
		if (index !== 0) {
			// establecemos las variables a comparar
			const fechaActual = formatoFecha(gasto.fecha);
			const fechaAnterior = formatoFecha(gastos[index - 1].fecha);
			// ejecuatos comparacion y devolvemos un valor boolean
			if (fechaActual === fechaAnterior) {
				return true;
			} else {
				return false;
			}
		}
	};

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
			<Lista>
				{gastos.map((gasto, index) => {
					return (
						<div key={gasto.id}>
							{/* si son fechas iguales distintas ejecuta la etiqueta Fecha */}
							{!fechaRepetida(gastos, index, gasto) && (
								<Fecha>{formatoFecha(gasto.fecha)}</Fecha>
							)}
							<ElementoLista>
								<Categoria>
									<IconoCategoria nombre={gasto.categoria} />
									{gasto.categoria}
								</Categoria>
								<Descripcion>{gasto.descripcion}</Descripcion>
								<Valor>{convertirMoneda(gasto.cantidad)}</Valor>
								<ContenedorBotones>
									<BotonAccion as={Link} to={`/editarGastos/${gasto.id}`}>
										<IconoEdit />
									</BotonAccion>
									<BotonAccion onClick={()=>eliminarGasto(gasto.id)}>
										<IconoDelete />
									</BotonAccion>
								</ContenedorBotones>
							</ElementoLista>
						</div>
					);
				})}
			</Lista>
			{/* si el valor es true mostramos el btn */}
			{hayMasPorCargar && (
				<ContenedorBotonCentral>
					<BotonCargarMas onClick={() => cargarMasGastos()}>
						Cargar Más
					</BotonCargarMas>
				</ContenedorBotonCentral>
			)}
			{gastos.length === 0 && (
				<ContenedorSubtitulo>
					<Subtitulo>No se encuentran gastos</Subtitulo>
					<Boton as={Link} to={'/'}>
						Cargar gasto
					</Boton>
				</ContenedorSubtitulo>
			)}
			<BarraTotalGastos />
		</>
	);
};

export default ListaGastos;
