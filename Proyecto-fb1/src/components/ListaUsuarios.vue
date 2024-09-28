<template>
    <div>
      <h2>Lista de Usuarios</h2>
      <ul v-if="usuarios.length">
        <li v-for="usuario in usuarios" :key="usuario.id">
          {{ usuario.nombre }} ({{ usuario.correo }})
          <button @click="eliminarUsuario(usuario.id)">Eliminar</button>
        </li>
      </ul>
      <p v-else>No hay usuarios registrados.</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      usuarios() {
        return this.$store.state.usuarios;
      }
    },
    methods: {
      eliminarUsuario(id) {
        this.$store.dispatch('eliminarUsuario', id);
      }
    },
    created() {
      this.$store.dispatch('fetchUsuarios');
    }
  };
  </script>
  