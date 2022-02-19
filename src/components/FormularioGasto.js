import React, { useState } from 'react';
// elements
import {
	ContenedorFiltros,
	Formulario,
	Input,
	InputGrande,
	ContenedorBoton,
} from './../elements/ElementosDeFormulario';
import Boton from '../elements/Boton';
import Alerta from './../elements/Alerta';
// components
import SelectCategorias from './SelectCategoria';
import DayPicker from './DayPicker';
// import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
// firebase components
import agregarGasto from '../firebase/agregarGasto';
// contexts
import { useAuth } from './../contexts/AuthContext';
// imagen svg
import { ReactComponent as IconoPlus } from './../images/plus.svg';

const FormularioGasto = () => {
	// definimos de estados de los inputs
	const [inputDescripcion, cambiarInputDescripcion] = useState('');
	const [inputCantidad, cambiarInputCantidad] = useState('');
	// definimos estado para la inputCategoria del select
	const [inputCategoria, cambiarCategoria] = useState('Hogar');
	// creamos estado de alerta
	const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
	const [alerta, cambiarAlerta] = useState({});
	// definimos el estado para el dayPicker
	const [inputFecha, cambiarFecha] = useState(new Date());
	// extraemos el usario
	const { usuario } = useAuth();

	// ejecutamos la funcion para cambiar el valor del input
	const handleChange = (e) => {
		if (e.target.name === 'descripcion') {
			cambiarInputDescripcion(e.target.value);
		} else if (e.target.name === 'cantidad') {
			cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
		}
	};
	// funcion para cargar los datos a la bd
	const handleSubmit = (e) => {
		e.preventDefault();

		// agregamos decimales a cantidad
		let cantidadDecimales = parseFloat(inputCantidad).toFixed(2);
		// verificamos si valor y descripcion estan vacios
		if (inputDescripcion !== '' && inputCantidad !== '') {
			// enviamos los datos
			agregarGasto({
				categoria: inputCategoria,
				fecha: getUnixTime(inputFecha),
				descripcion: inputDescripcion,
				cantidad: cantidadDecimales,
				uIdUsuario: usuario.uid,
			}).then(() => {
				// limpiamos los input's
				cambiarInputDescripcion('');
				cambiarInputCantidad('');
				cambiarCategoria('hogar');
				cambiarFecha(new Date());
				// mostramos alerta
				cambiarEstadoAlerta(true);
				cambiarAlerta({ tipo: 'exito', mensaje: 'Nuevo gasto agregado' });
			});
		} else {
			cambiarEstadoAlerta(true);
			cambiarAlerta({ tipo: 'error', mensaje: 'Completá todos los campos' });
		}
	};

	return (
		<Formulario onSubmit={handleSubmit}>
			<ContenedorFiltros>
				<SelectCategorias
					categoria={inputCategoria}
					cambiarCategoria={cambiarCategoria}
				/>
				<DayPicker fecha={inputFecha} cambiarFecha={cambiarFecha} />
			</ContenedorFiltros>
			<div>
				<Input
					type="text"
					name="descripcion"
					placeholder="Descripcion"
					value={inputDescripcion}
					onChange={handleChange}
				></Input>
				<InputGrande
					type="number"
					name="cantidad"
					placeholder="$0.00"
					value={inputCantidad}
					onChange={handleChange}
				></InputGrande>
				<ContenedorBoton>
					<Boton as="button" primario conIcono type="submit">
						AGREGAR GASTO <IconoPlus />
					</Boton>
				</ContenedorBoton>
			</div>
			<Alerta
				tipo={alerta.tipo}
				mensaje={alerta.mensaje}
				estadoAlerta={estadoAlerta}
				cambiarEstadoAlerta={cambiarEstadoAlerta}
			/>
		</Formulario>
	);
};

export default FormularioGasto;
