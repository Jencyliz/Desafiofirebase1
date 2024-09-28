<template>
    <div>
      <h2>Agregar Usuario</h2>
      <form @submit.prevent="enviarFormulario">
        <input v-model="nombre" type="text" placeholder="Nombre" required />
        <input v-model="correo" type="email" placeholder="Correo" required />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        correo: ''
      };
    },
    methods: {
      enviarFormulario() {
        const usuario = {
          nombre: this.nombre,
          correo: this.correo
        };
        this.$store.dispatch('agregarUsuario', usuario);
        this.nombre = '';
        this.correo = '';
      }
    }
  };
  </script>
  