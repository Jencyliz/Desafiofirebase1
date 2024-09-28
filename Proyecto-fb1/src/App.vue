<template>
  <div id="app">
    <FormularioUsuario />
    <ListaUsuarios />
  </div>
</template>

<script>
import FormularioUsuario from './components/FormularioUsuario.vue';
import ListaUsuarios from './components/ListaUsuarios.vue';

export default {
  components: {
    FormularioUsuario,
    ListaUsuarios
  }
};
</script>

<style>
body {
  background-color: #121212;
  color: #ffffff;
  font-family: 'Poppins', sans-serif; 
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

h1, h2 {
  color: #ff1a75; 
  text-align: center;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}

form {
  background-color: #1f1f1f;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

input[type="text"],
input[type="email"],
button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  font-size: 16px;
}

input[type="text"],
input[type="email"] {
  background-color: #2c2c2c;
  color: #ffffff;
  outline: none;
  border: 2px solid #ff1a75;
}

input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #ff6ec7;
}

button {
  background: linear-gradient(45deg, #ff1a75, #ff6ec7);
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 16px; 
  border-radius: 5px;
  transition: background 0.3s ease;
  width: auto; 
  display: inline-block; 
}

button:hover {
  background: linear-gradient(45deg, #ff6ec7, #ff1a75);
}

ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

li {
  background-color: #1f1f1f;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
}

li button {
  background-color: #ff1a75;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}

li button:hover {
  background-color: #ff6ec7;
}
</style>
