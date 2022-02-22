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
import RutaPrivada from './components/RutaPrivada';
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

							<Route
								path="/gastoCategoria"
								element={
									<RutaPrivada>
										<GastoCategoria />
									</RutaPrivada>
								}
							/>
							<Route
								path="/listaGastos"
								element={
									<RutaPrivada>
										<ListaGastos />
									</RutaPrivada>
								}
							/>
							<Route
								path="/editarGastos/:id"
								element={
									<RutaPrivada>
										<EditarGastos />
									</RutaPrivada>
								}
							/>
							<Route
								path="/"
								element={
									<RutaPrivada>
										<App />
									</RutaPrivada>
								}
							/>
						</Routes>
					</Contenedor>
				</BrowserRouter>
			</AuthProvider>
			<Fondo />
		</>
	);
};

ReactDOM.render(<Index />, document.getElementById('root'));
