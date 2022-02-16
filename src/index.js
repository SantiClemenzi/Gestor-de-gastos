import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// paquetes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// estilos
import './index.css';
// fuente
import WebFont from 'webfontloader';
// componentes
import InicioSesion from './components/InicioSesion';
import RegistroUsuario from './components/RegistroUsuarios';
import GastoCategoria from './components/GastosCategoria';
import ListaGastos from './components/ListaGastos';
import EditarGastos from './components/EditarGastos';
// elementos
import Contenedor from './elements/Contenedor';
import Fondo from './elements/Fondo';
// favicon
import favicon from './images/logo.png';
// contexts
import { AuthProvider } from './contexts/AuthContext';

// cargamos las familias de fuente que queremos usar
WebFont.load({
	google: {
		families: ['Work Sans: 400,500,700', 'sans-serif'],
	},
});

const Index = () => {
	return (
		<>
			<Helmet>
				<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			</Helmet>
			<AuthProvider>
				<BrowserRouter>
					<Contenedor>
						<Routes>
							<Route path="/inicioSesion" element={<InicioSesion />} />
							<Route path="/registroUsuario" element={<RegistroUsuario />} />
							<Route path="/gastoCategoria" element={<GastoCategoria />} />
							<Route path="/listaGastos" element={<ListaGastos />} />
							<Route path="/editarGastos" element={<EditarGastos />} />
							<Route path="/" element={<App />} />
						</Routes>
					</Contenedor>
				</BrowserRouter>
			</AuthProvider>
			<Fondo />
		</>
	);
};

ReactDOM.render(<Index />, document.getElementById('root'));
