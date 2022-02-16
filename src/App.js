import React from 'react';
// elementos
import {
	Header,
	Titulo,
	ContenedorBotones,
	ContenedorHeader,
} from './elements/Header';
import Boton from './elements/Boton';
import BotonCerrarSesion from './elements/BotonCerrarSesion';
import FormularioGasto from './components/FormularioGasto';

const App = () => {
	return (
		<>
			<Header>
				<ContenedorHeader>
					<Titulo>Agregar gasto</Titulo>
				</ContenedorHeader>
				<ContenedorBotones>
					<Boton to="/gastoCategoria">Categoria</Boton>
					<Boton to="/listaGastos">Lista</Boton>
					<BotonCerrarSesion/>
				</ContenedorBotones>
			</Header>
			<FormularioGasto/>
		</>
	);
};

export default App;
