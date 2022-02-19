import React from "react";
// package's
import styled from "styled-components";
// theme
import theme from "../theme";
// funciones
import formatearCantidad from './../funciones/convertirMoneda';

const BarraTotalGastos = () => {
    return ( 
        <BarraTotal>
            <p>total gastado</p>
            <p>{formatearCantidad(300.50)}</p>
        </BarraTotal>
     );
}
const BarraTotal = styled.div`
background: ${theme.verde};
font-size: 1.25rem; /* 20px */
letter-spacing: 1px;
font-weight: 500;
text-transform: uppercase;
padding: 0.62rem 2.25rem; /* 10px 40px */
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 31.25rem) { /* 500px */
    flex-direction: column;
    font-size: 14px;
}
`;
export default BarraTotalGastos;