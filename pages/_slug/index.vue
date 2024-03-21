<template>
  <div>
    <h1>Page for Slug: {{ slug }}</h1>
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
  asyncData(context: Context) {
    // context.params.slug will be available here
    return { slug: context.params.slug }
  }
});
</script>