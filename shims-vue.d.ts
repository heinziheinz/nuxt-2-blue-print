// shims-vue.d.ts
import Vue from 'vue';
import { BuefyNamespace } from 'buefy';

declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $buefy: BuefyNamespace;
  }
}