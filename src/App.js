import React from 'react';
// elementos
import {
	Header,
	Titulo,
	ContenedorBotones,
	ContenedorHeader,
} from './elements/Header';
import Boton from './elements/Boton';

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
					<Boton to="/">Cerrar sesion</Boton>
				</ContenedorBotones>
			</Header>
		</>
	);
};

export default App;
