<template>
    <div>
      <h1>Dynamic Route: {{ $route.params.pathMatch }}</h1>
      <p>This page will match all nested routes under /users</p>
    </div>
  </template>
  
  <script>
  export default {
    // ready to be extended with JavaScript logic
  }
  </script>