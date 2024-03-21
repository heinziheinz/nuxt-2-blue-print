<template>
    <div>
      <h1>Page for Slug: {{ slug }} in the middle</h1>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  import { Context } from '@nuxt/types';
  
  export default Vue.extend({
    data() {
      return {
        slug: ''
      }
    },
    asyncData({ params }) {
      // context.params.slug will be available here
      return { slug: params.slug }
    }
  });
  </script>