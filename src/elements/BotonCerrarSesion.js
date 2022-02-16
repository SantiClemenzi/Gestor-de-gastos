import React from 'react';
// archivos firebase
import { auth } from './../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
// react router
import { useNavigate } from 'react-router-dom';
// elements
import Boton from './Boton';
// icono svg
import { ReactComponent as IconoLogOut } from './../images/log-out.svg';

const BotonCerrarSesion = () => {
    const navigate = useNavigate();

	const cerrarSesion = async () => {
		try {
			await signOut(auth);
            navigate('/inicioSesion');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Boton iconoGrande as="button" onClick={cerrarSesion}>
			<IconoLogOut />
		</Boton>
	);
};

export default BotonCerrarSesion;
