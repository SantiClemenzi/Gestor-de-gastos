import React from 'react';
// packages
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// components
import FormularioGasto from './FormularioGasto';
import BarraTotalGastos from './BarraTotalGastos';
// hook
import useObtenerGasto from '../hooks/useObtenerGasto';
// elements
import { Header, Titulo } from '../elements/Header';
import BotonRegresar from './../elements/BotonRegresar';

const EditarGastos = () => {
	const { id } = useParams();
	const [gasto] = useObtenerGasto(id);
	// console.log(gasto);
	return (
        <>
            <Helmet>
                <title>Editar Gasto</title>
            </Helmet>
            <Header>
                <BotonRegresar ruta='/listaGastos/'/>
                <Titulo>Editar Gasto</Titulo>
            </Header>
            <FormularioGasto gasto={gasto}/>
            <BarraTotalGastos/>
        </>
    );
    
};

export default EditarGastos;
