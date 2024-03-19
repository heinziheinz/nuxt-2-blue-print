<template>
    <section class="section">
      <h3 class="subtitle is-6 has-text-grey">
        {{ message }}
      </h3>
      <h2>{{ secondMessage }}</h2>
    </section>
  </template>
  
  <script lang="ts">
  import Vue , { defineComponent } from 'vue'
  export default  Vue.extend({
    name: 'InspirePage',
    props: {
          secondMessage: {
            type: String,
            required: true
          }
        },
    data() {
      return {
        name:'AboutMe',
        message: 'Hello Vue 2!',
      }
    }
  });
  </script>
  