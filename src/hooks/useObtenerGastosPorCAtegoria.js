import { useEffect, useState } from 'react';
// hooks
import useObtenerGastoMes from './useObtenerGastoMes';

const useObtenerGastosPorCategoria = () => {
	const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);

	const gastos = useObtenerGastoMes();

	useEffect(() => {
		const sumaGastos = gastos.reduce(
			(objetoResultante, objetoActual) => {
				const categoriaActual = objetoActual.categoria;
				const cantidadActual = objetoActual.cantidad;

				objetoResultante[categoriaActual] += cantidadActual;

				return objetoResultante;
			},
			{
				'Comida': 0,
				'Cuentas y pagos': 0,
				'Hogar': 0,
				'Transporte': 0,
				'Ropa': 0,
				'Salud e Higiene': 0,
				'Compras': 0,
				'Diversion': 0,
			}
		);
		cambiarGastosPorCategoria(
			Object.keys(sumaGastos).map((elemento) => {
				return { categoria: elemento, cantidad: sumaGastos[elemento] };
			})
		);
	}, [gastos]);

	return gastosPorCategoria;
};

export default useObtenerGastosPorCategoria;
