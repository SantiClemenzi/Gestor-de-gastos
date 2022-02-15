import React, { useState } from 'react';
import styled from 'styled-components';
// paquetes
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
// elementos
import { Header, Titulo, ContenedorHeader } from '../elements/Header';
import Boton from './../elements/Boton';
import {
	Formulario,
	Input,
	ContenedorBoton,
} from './../elements/ElementosDeFormulario';
import Alerta from '../elements/Alerta';
// imagen svg
import { ReactComponent as SvgLogIn } from './../images/login.svg';
// recursos de firebase
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const InicioSesion = () => {
	// creamos el estado de cada input
	const [correo, establecerCorreo] = useState('');
	const [contraseña, establecerContraseña] = useState('');
	// creamos el estado de navigate
	const navigate = useNavigate();
	// creamos el estado de Alerta
	const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
	const [alerta, cambiarAlerta] = useState({});

	// cargamos los inputs en cada estado
	const handleChange = (e) => {
		if (e.target.name === 'email') {
			establecerCorreo(e.target.value);
		} else if (e.target.name === 'password') {
			establecerContraseña(e.target.value);
		}
	};

	// funcion para ingresar a la cuenta
	const handleSubmit = async (e) => {
		e.preventDefault();

		// establecemos el estado de alerta en false
		cambiarEstadoAlerta(false);
		cambiarAlerta({});

		// funcion para verificar el email
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		// validaciones para el registro de usuario
		if (!expresionRegular.test(correo)) {
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: 'Ingrese un correo valido',
			});
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}
		if (correo === '' || contraseña === '') {
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: 'Porfavor completa todos los datos',
			});
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}
		try {
			// enviamos los datos a firebase
			await signInWithEmailAndPassword(auth, correo, contraseña);
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'exito',
				mensaje: 'Se inicio sesion',
			});
			// redireccionamos la pagina a inicio
			navigate('/');
		} catch (error) {
			let mensaje;
			// creamos switch para cada tipo de error
			switch (error.code) {
				case 'auth/wrong-password':
					mensaje = 'Contraseña incorrecta.';
					break;
				case 'auth/user-not-found':
					mensaje = 'El correo que ingreso no esta registrado.';
					break;
				default:
					mensaje = 'Hubo un error al intentar ingresar a la cuenta.';
					break;
			}
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: mensaje,
			});
		}
	};

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
			<Formulario onSubmit={handleSubmit}>
				<Svg />
				<Input
					type="email"
					name="email"
					placeholder="nombre@correo.com"
					value={correo}
					onChange={handleChange}
					required
				/>
				<Input
					type="password"
					name="password"
					placeholder="Contraseña"
					value={contraseña}
					onChange={handleChange}
					required
				/>
				<ContenedorBoton>
					<Boton as="button" type="submit" primario>
						Iniciar Sesion
					</Boton>
				</ContenedorBoton>
			</Formulario>
			<Alerta
				tipo={alerta.tipo}
				mensaje={alerta.mensaje}
				estadoAlerta={estadoAlerta}
				cambiarEstadoAlerta={cambiarEstadoAlerta}
			/>
		</>
	);
};

const Svg = styled(SvgLogIn)`
	width: 100%;
	max-height: 13rem;
	margin-bottom: 1.25rem;
`;

export default InicioSesion;
