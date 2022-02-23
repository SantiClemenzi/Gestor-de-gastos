import { useState, useEffect } from 'react';
// package´s
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
// contexts
import { useAuth } from '../contexts/AuthContext';
// firebase resources
import { db } from '../firebase/firebaseConfig';
import {
	collection,
	onSnapshot,
	query,
	orderBy,
	where,
} from 'firebase/firestore';

const useObtenerGastoMes = () => {
	const [gastos, establecerGasto] = useState([]);
	// extraemos estado del usuario
	const { usuario } = useAuth();

	useEffect(() => {
		const inicioMes = getUnixTime(startOfMonth(new Date()));
		const finMes = getUnixTime(endOfMonth(new Date()));

		if (usuario) {
			const consulta = query(
				collection(db, 'gastos'),
				orderBy('fecha', 'desc'),
				where('fecha', '>=', inicioMes),
				where('fecha', '<=', finMes),
				where('uIdUsuario', '==', usuario.uid)
			);

			const unsuscribe = onSnapshot(
				consulta,
				(snapshot) => {
					establecerGasto(
						snapshot.docs.map((documento) => {
							return { ...documento.data(), id: documento.id };
						})
					);
				},
				(error) => {
					console.log(error);
				}
			);

			return unsuscribe;
		}
	}, [usuario]);

	return gastos;
};

export default useObtenerGastoMes;
