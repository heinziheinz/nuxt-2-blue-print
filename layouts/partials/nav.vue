<template>
  <header>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav> 
  </header>
</template>

<script ts="ts">
import Vue from 'vue';
export default Vue.extend({
    // Your component options go here
    name: 'Nav',
})
</script>

<style scoped>
/* Your component styles go here */
</style>