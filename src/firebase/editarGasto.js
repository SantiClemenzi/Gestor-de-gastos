import {db} from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarGasto = async({id, categoria, fecha, descripcion, cantidad}) => {
    const documento =  doc(db, 'gastos', id);

    return await updateDoc(documento,{
        id: id,
        categoria: categoria,
        fecha: fecha,
        descripcion: descripcion,
        cantidad: Number(cantidad),
    });
}
 
export default editarGasto;