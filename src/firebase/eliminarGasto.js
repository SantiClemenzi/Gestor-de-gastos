import { db } from './firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
const eliminarGasto = async ( id ) => {
	return await deleteDoc(doc(db, 'gastos', id));
};

export default eliminarGasto;
