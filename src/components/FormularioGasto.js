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
// components
import SelectCategorias from './SelectCategoria';
import DayPicker from './DayPicker';
// imagen svg
import { ReactComponent as IconoPlus } from './../images/plus.svg';

const FormularioGasto = () => {
	// definimos de estados de los inputs
	const [inputDescripcion, cambiarInputDescripcion] = useState('');
	const [inputCantidad, cambiarInputCantidad] = useState('');
	// definimos estado para la categoria del select
	const [categoria, cambiarCategoria] = useState('Hogar');
	// definimos el estado para el dayPicker
	const [fecha, cambiarFecha] = useState(new Date());

	// ejecutamos la funcion para cambiar el valor del input
	const handleChange = (e) => {
		if (e.target.name === 'descripcion') {
			cambiarInputDescripcion(e.target.value);
		} else if (e.target.name === 'cantidad') {
			cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
		}
	};

	return (
		<Formulario>
			<ContenedorFiltros>
				<SelectCategorias categoria={categoria} cambiarCategoria={cambiarCategoria}/>
				<DayPicker fecha={fecha} cambiarFecha={cambiarFecha}/>
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
		</Formulario>
	);
};

export default FormularioGasto;
