<script setup>
import app from "../utils/app";
</script>
<template>
  <nav class="navbar bg-primary">
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="#">
        {{ app.data.nim }} - {{ app.data.name }}
      </a>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  font-family: "Roboto", sans-serif;
}
.bg-primary {
  background-color: #9E6DF7 !important;
}
.navbar-brand {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
