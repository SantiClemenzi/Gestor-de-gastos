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
} from 'firebase/firestore';

const useObtenerGastos = () => {
	const [gastos, cambiarGastos] = useState([]);
	// obetnemos el id usuario
	const { usuario } = useAuth();
	// estados para el onSnapshot
	const [ultimoGasto, cambiarUltimoGasto] = useState(null);
	const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

	useEffect(() => {
		const consulta = query(
            collection(db, 'gastos'),
			where('uIdUsuario', '==', usuario.uid),
			orderBy('fecha', 'desc'),
			limit(10)
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
	return [gastos, ultimoGasto, hayMasPorCargar];
};

export default useObtenerGastos;
