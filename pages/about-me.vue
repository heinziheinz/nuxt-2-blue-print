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
  import Vue from 'vue'
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
    async fetch() {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      this.swapiAPIArray = response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
  });
  </script>

  