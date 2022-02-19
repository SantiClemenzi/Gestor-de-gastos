import {db} from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const agregarGasto = ({categoria, fecha, descripcion, cantidad, uIdUsuario}) => {
    return addDoc(collection(db, 'gastos'),{
        categoria: categoria,
        fecha: fecha,
        descripcion: descripcion,
        cantidad: Number(cantidad),
        uIdUsuario: uIdUsuario
    });
}
 
export default agregarGasto;