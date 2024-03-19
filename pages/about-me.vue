<template>
    <section class="section">
      <h3 class="subtitle is-6 has-text-grey">
        {{ message }}
      </h3>
      <ul>
      <li v-for="person in swapiAPIArray" :key="person.name">
        {{ person.name }}
      </li>
    </ul>

    </section>
  </template>
  
  <script lang="ts">
  import Vue , { defineComponent } from 'vue'
  import Person from '~/type/Person';
  import axios from 'axios';
  export default  Vue.extend({
    name: 'InspirePage',
    data() {
      return {
        name:'AboutMe',
        message: 'Hello Vue 2!',
        swapiAPIArray: [] as Person[],
      }
    },
    mounted() {
      console.log('Component mounted.')
      axios.get("https://swapi.dev/api/people/").then((response) => {
      this.swapiAPIArray = response.data.results;
      console.log(this.swapiAPIArray);
      }).catch((error) => {
        console.log(error);
      });
    }
  });
  </script>
  