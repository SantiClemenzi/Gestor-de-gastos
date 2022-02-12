import React from 'react';
import styled from 'styled-components';
// paquetes
import { Helmet } from 'react-helmet';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import Boton from './../elements/Boton';
import {
	Formulario,
	Input,
	ContenedorBoton,
} from './../elements/ElementosDeFormulario';
// imagen svg
import { ReactComponent as SvgLogIn } from './../images/login.svg';

const InicioSesion = () => {
	return (
		<>
			<Helmet>
				<title>Iniciar Sesion</title>
			</Helmet>
			<Header>
				<ContenedorHeader>
					<Titulo>Iniciar Sesion</Titulo>
					<div>
						<Boton to="/registroUsuario">Registrarse</Boton>
					</div>
				</ContenedorHeader>
			</Header>
			<Formulario>
				<Svg />
				<Input
					type="email"
					name="email"
					placeholder="nombre@correo.com"
					required
				/>
				<Input
					type="password"
					name="password"
					placeholder="Contraseña"
					required
				/>
			</Formulario>
			<ContenedorBoton>
				<Boton as="button" type="submit" primario>
					Iniciar Sesion
				</Boton>
			</ContenedorBoton>
		</>
	);
};

const Svg = styled(SvgLogIn)`
	width: 100%;
	max-height: 13rem;
	margin-bottom: 1.25rem;
`;

export default InicioSesion;
