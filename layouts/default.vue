<template>
  <div>
    <Nav/>
    <section class="main-content columns">
      <AsideNav/>
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Nav from './partials/nav.vue';
import AsideNav from './partials/aside-nav.vue';
export default {
  name: 'DefaultLayout',
  components: {
    Nav,
    AsideNav
  }
}
</script>
