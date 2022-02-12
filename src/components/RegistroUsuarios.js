import React, { useState } from 'react';
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
	// creamos el estado de cada input
	const[correo, establecerCorreo] = useState('');
	const[contraseña, establecerContraseña] = useState('');
	const[contraseña2, establecerContraseña2] = useState('');
	
	//cargamos los inputs en cada estado 
	const handleChange = (e) =>{
		switch(e.target.name){
			case 'email':
				establecerCorreo(e.target.value);
				break;
			case 'password-1':
				establecerContraseña(e.target.value);
				break;
			case 'password-2':
				establecerContraseña2(e.target.value);
				break;
			default:
				break;
		}
	}
	
	// validaciones de los inputs
	const handleSubmit = (e) =>{
		e.preventDefault();
		// funcion para verificar el email
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		
		// validaciones para el registro de usuario
		if(!expresionRegular.test(correo)){
			console.log('Ingrese un correo valido');
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}
		if(correo === '' || contraseña === '' || contraseña2 === ''){
			console.log('Porfavor completa todos los datos');
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}
		if(contraseña !== contraseña2){
			console.log('las contraseñas no coinciden');
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}

		console.log('Registramos usuario');
	}
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
					name="password-1"
					placeholder="Contraseña"
					value={contraseña}
					onChange={handleChange}
					required
				/>
				<Input
					type="password"
					name="password-2"
					placeholder="Repita su contraseña"
					value={contraseña2}
					onChange={handleChange}
					required
				/>
				<ContenedorBoton>
					<Boton as="button" type="submit" primario>
						Crear Cuenta
					</Boton>
				</ContenedorBoton>
			</Formulario>
		</>
	);
};

const Svg = styled(SvgLogIn)`
	width: 100%;
	max-height: 6.5rem;
	margin-bottom: 1.25rem;
`;
export default RegistroUsuarios;
