<template>
    <div>
      <h1>Personal Info for ID: {{ id }}</h1>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    asyncData({ params }) {
      // params.id will be available here
      return { id: params.id }
    }
  });
  </script>