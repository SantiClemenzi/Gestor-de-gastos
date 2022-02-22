import { useEffect, useState } from 'react';
// packages
import { useNavigate } from 'react-router-dom';
// recursos de firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const useObtenerGasto = (id) => {
	const navigate = useNavigate();
	// creamos estado para guardar el gasto
	const [gasto, establecerGasto] = useState('');

	useEffect(() => {
		const obtenerGasto = async () => {
			const documento = await getDoc(doc(db, 'gastos', id));
			// comprobacion de existencia del documento
			if (documento.exists) {
				establecerGasto(documento);
			} else {
				navigate('/listaGastos');
			}
		};

		obtenerGasto();
	}, [navigate, id]);
	return [gasto];
};

export default useObtenerGasto;
