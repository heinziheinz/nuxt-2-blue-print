<template>
    <div>
      <h1>user ID: {{ id }}</h1>
      <p>{{ $route.params.id }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data() {
      return {
       secondId:this.$route.params.id,
      }
    },
    asyncData({ params }) {
      // params.id will be available here
      return { id: params.id }
    }
  });
  </script>