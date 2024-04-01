<template>
    <div>
        <p>{{ customerResponse.customerName }}</p>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import CustomerResponseInterface from '../pages/type/CustomerResponse';
export default Vue.extend({
    props: {
        customerResponse: {
            type: Object as PropType<CustomerResponseInterface>,
            required: true
        }
    }
})
</script>