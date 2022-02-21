import { useState, useEffect } from 'react';
// contexts
import { useAuth } from '../contexts/AuthContext';
// firebase
import { db } from '../firebase/firebaseConfig';
import {
	collection,
	onSnapshot,
	query,
	orderBy,
	where,
	limit,
	startAfter,
} from 'firebase/firestore';

const useObtenerGastos = () => {
	const [gastos, cambiarGastos] = useState([]);
	// obetnemos el id usuario
	const { usuario } = useAuth();
	// estados para el boton cargar mas gastos
	const [ultimoGasto, cambiarUltimoGasto] = useState(null);
	const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

	// obtenemos mas gastos
	const cargarMasGastos = () => {
		const consulta = query(
			collection(db, 'gastos'),
			where('uIdUsuario', '==', usuario.uid),
			orderBy('fecha', 'desc'),
			limit(5),
			startAfter(ultimoGasto)
		);
		onSnapshot(
			consulta,
			(snapshot) => {
				if (snapshot.docs.length > 0) {
					cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);

					cambiarGastos(
						gastos.concat(
							snapshot.docs.map((gasto) => {
								return { ...gasto.data(), id: gasto.id };
							})
						)
					);
				} else {
					cambiarHayMasPorCargar(false);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	};

	useEffect(() => {
		// consulta para obtener los gastos
		const consulta = query(
			collection(db, 'gastos'),
			where('uIdUsuario', '==', usuario.uid),
			orderBy('fecha', 'desc'),
			limit(5)
		);

		const unsuscribe = onSnapshot(consulta, (snapshot) => {
			if (snapshot.docs.length > 0) {
				cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
				cambiarHayMasPorCargar(true);
			} else {
				cambiarHayMasPorCargar(false);
			}
			cambiarGastos(
				snapshot.docs.map((gasto) => {
					return { ...gasto.data(), id: gasto.id };
				})
			);
		});
		return unsuscribe;
	}, [usuario]);
	return [gastos, cargarMasGastos, hayMasPorCargar];
};

export default useObtenerGastos;
