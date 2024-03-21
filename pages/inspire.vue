<template>
  <section class="b-tooltips">
    <b-tooltip label="Tooltip right"
            position="is-right">
            <b-button label="Right" type="is-dark" />
        </b-tooltip>
        
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"
      />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">
        Antério Vieira
      </a>
    </h3>
    <button @click="addName('Hallo Vue')">This is Vue</button>
    <b-button type="is-primary" @click="clickMe">Click Me</b-button>
    <h3>{{ showData }}</h3>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
// import Buefy from 'buefy';
export default Vue.extend({
  name: 'Inspire', 
  data() {
    return {
      showData:'',
    }
  },
  methods:{
    addName( name:string ){
      this.showData = name;
    },
    clickMe() {
      // (this as any).$buefy.notification.open('Clicked!!')
      this.$buefy.notification.open('Clicked!!')
            }
  },
});
</script>
