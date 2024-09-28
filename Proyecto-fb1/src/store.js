import { createStore } from 'vuex';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Importar funciones necesarias
import { db } from './firebase'; 
export default createStore({
  state: {
    usuarios: []
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
    agregarUsuario(state, usuario) {
      state.usuarios.push(usuario);
    },
    eliminarUsuario(state, id) {
      state.usuarios = state.usuarios.filter(usuario => usuario.id !== id);
    }
  },
  actions: {
    async fetchUsuarios({ commit }) {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios')); 
        const usuarios = [];
        querySnapshot.forEach(doc => {
          usuarios.push({ id: doc.id, ...doc.data() });
        });
        commit('setUsuarios', usuarios);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    async agregarUsuario({ commit }, usuario) {
      try {
        const docRef = await addDoc(collection(db, 'usuarios'), usuario);
        commit('agregarUsuario', { id: docRef.id, ...usuario });
      } catch (error) {
        console.error('Error al agregar usuario:', error);
      }
    },
    async eliminarUsuario({ commit }, id) {
      try {
        await deleteDoc(doc(db, 'usuarios', id)); 
        commit('eliminarUsuario', id);
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
      }
    }
  }
});
