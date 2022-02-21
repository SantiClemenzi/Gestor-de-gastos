import React, { useState } from 'react';
// elements
import IconoCategoria from '../elements/IconoCategoria';
// paquetes
import styled from 'styled-components';
// theme
import theme from '../theme';
// icono svg
import { ReactComponent as IconoDown } from './../images/down.svg';

const ContenedorSelect = styled.div`
	background: ${theme.grisClaro};
	cursor: pointer;
	border-radius: 0.625rem; /* 10px */
	position: relative;
	height: 5rem; /* 80px */
	width: 40%;
	padding: 0px 1.25rem; /* 20px */
	font-size: 1.5rem; /* 24px */
	text-align: center;
	display: flex;
	align-items: center;
	transition: 0.5s ease all;
	&:hover {
		background: ${theme.grisClaro2};
	}
`;

const OpcionSeleccionada = styled.div`
	width: 100%;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: space-between;
	svg {
		width: 1.25rem; /* 20px */
		height: auto;
		margin-left: 1.25rem; /* 20px */
	}
`;

const Opciones = styled.div`
	background: ${theme.grisClaro};
	position: absolute;
	top: 5.62rem; /* 90px */
	left: 0;
	width: 100%;
	border-radius: 0.625rem; /* 10px */
	max-height: 18.75rem; /* 300px */
	overflow-y: auto;
`;

const Opcion = styled.div`
	padding: 1.25rem; /* 20px */
	display: flex;
	svg {
		width: 28px;
		height: auto;
		margin-right: 1.25rem; /* 20px */
	}
	&:hover {
		background: ${theme.grisClaro2};
	}
`;
const SelectCategorias = ({ categoria, cambiarCategoria }) => {
	// estado para mostrar las categorias
	const [mostrarSelect, cambiarMostrarSelect] = useState(false);

	// objeto con las categorias
	const categorias = [
		{ id: 'Comida', texto: 'Comida' },
		{ id: 'Cuentas y pagos', texto: 'Cuentas y pagos' },
		{ id: 'Hogar', texto: 'Hogar' },
		{ id: 'Transporte', texto: 'Transporte' },
		{ id: 'Ropa', texto: 'Ropa' },
		{ id: 'Salud e Higiene', texto: 'Salud e Higiene' },
		{ id: 'Compras', texto: 'Compras' },
		{ id: 'Diversion', texto: 'Diversion' },
	];

	// funcion para mostrar la categoria seleccionada
	const handleClick = (e) => {
        cambiarCategoria(e.currentTarget.dataset.valor);
    };
	return (
		<ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
			<OpcionSeleccionada>
				{categoria}
				<IconoDown />
			</OpcionSeleccionada>
			{mostrarSelect && (
				<Opciones>
					{categorias.map((categoria) => {
						return (
							<Opcion
								key={categoria.id}
								onClick={handleClick}
								data-valor={categoria.texto}
							>
                                <IconoCategoria nombre={categoria.id}/>
								{categoria.texto}
							</Opcion>
						);
					})}
				</Opciones>
			)}
		</ContenedorSelect>
	);
};

export default SelectCategorias;
