import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// fuente
import WebFont from 'webfontloader';

// cargamos las familias de fuente que queremos usar
WebFont.load({
	google: {
		families: ['Work Sans: 400,500,700', 'sans-serif'],
	},
});

const Index = () => {
	return <App />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
