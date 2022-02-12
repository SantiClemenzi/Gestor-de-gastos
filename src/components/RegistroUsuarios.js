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
import { ReactComponent as SvgLogIn } from './../images/registro.svg';

const RegistroUsuarios = () => {
	return (
		<>
			<Helmet>
				<title>Crear Cuenta</title>
			</Helmet>
			<Header>
				<ContenedorHeader>
					<Titulo>Crear Cuenta</Titulo>
					<div>
						<Boton to="/inicioSesion">Iniciar sesion</Boton>
					</div>
				</ContenedorHeader>
			</Header>
			<Formulario>
                <Svg/>
				<Input type="email" name="email" placeholder="nombre@correo.com" required/>
				<Input type="password" name="password" placeholder="Contraseña" required/>
				<Input
					type="password"
					name="password2"
					placeholder="Repita su contraseña"
                    required
				/>
			</Formulario>
			<ContenedorBoton>
				<Boton as='button' type="submit" primario>
					Crear Cuenta
				</Boton>
			</ContenedorBoton>
		</>
	);
};

const Svg = styled(SvgLogIn)`
    width: 100%;
    max-height: 6.50rem;
    margin-bottom: 1.25rem;
`;
export default RegistroUsuarios;
