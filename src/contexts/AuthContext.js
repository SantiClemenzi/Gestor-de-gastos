import React, { useContext, useState, useEffect } from 'react';
// validacion con firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

// creamos contexto
const AuthContext = React.createContext();

// creamos hook
const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	// creamos el estado de usuario
	const [usuario, cambiarUsuario] = useState();

	// estado para cargar la comprobacion onAuthStateChanged
	const [cargando, cambiarCargando] = useState(true);
	// hook para ejecutar la comprobacion una sola vez
	useEffect(() => {
		// comprobamos si hay usuario
		const cancelarSubscricion = onAuthStateChanged(auth, (usuario) => {
			// console.log(usuario);
			cambiarUsuario(usuario);
			cambiarCargando(false);
		});
		return cancelarSubscricion;
	});

	return (
		<AuthContext.Provider value={{ usuario: usuario }}>
			{!cargando && children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, AuthContext, useAuth };
