import React from 'react';
// theme
import theme from './../theme';
// Package's
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { es } from 'date-fns/locale';

function parseDate(str, format, locale) {
	const parsed = dateFnsParse(str, format, new Date(), { locale: es });
	if (DateUtils.isDate(parsed)) {
		return parsed;
	}
	return undefined;
}

function formatDate(date, format, locale) {
	return dateFnsFormat(date, format, { locale: es });
}

// agregamos arreglos para poner el calendario en español
const meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];
const dias_semana_cortos = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

const DayPicker = ({ fecha, cambiarFecha }) => {
	return (
		<ContenedorInput>
			<DayPickerInput
				value={fecha}
				// cambia la fecha del input
				onDayChange={(day) => cambiarFecha(day)}
				formatDate={formatDate}
				parseDate={parseDate}
				format="dd 'de' MMMM 'del' yyyy"
                // modificamos la propiedad para que este en español
				dayPickerProps={{
					months: meses,
					weekdaysShort: dias_semana_cortos,
				}}
			/>
		</ContenedorInput>
	);
};

const ContenedorInput = styled.div`
	input {
		font-family: 'Work Sans', sans-serif;
		box-sizing: border-box;
		background: ${theme.grisClaro};
		border: none;
		cursor: pointer;
		border-radius: 0.625rem; /* 10px */
		height: 5rem; /* 80px */
		width: 100%;
		padding: 0 1.25rem; /* 20px */
		font-size: 1.5rem; /* 24px */
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 60rem) {
		/* 950px */
		& > * {
			width: 100%;
		}
	}
`;
export default DayPicker;
