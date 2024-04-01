<template>
    <div>
        <div>hallo Comments</div>
        <b-field id="b-field" label="Username" :type="isSuccess ? 'is-success' : ''"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>
        <input type="text" v-model="customerName">

        <b-button @click="sendMessage">Send Message</b-button>
        <b-button @click="toggleSuccess">Toggle Success</b-button>
        <CustomerResponse v-if="Object.keys(customerResponse).length > 0" :customerResponse="customerResponse" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import CustomerResponse from '../../components/CustomerResponse.vue';
import CustomerResponseInterface from '../type/CustomerResponse';
export default Vue.extend({
    data() {
        return {
            customerName: '',
            isSuccess: false,
            customerResponse: {} as CustomerResponseInterface,
        }
    },
    methods: {
        async sendMessage() {
            console.log(this.customerName);
            try {
                const res = await axios.post('http://localhost:3000/api/customers', {
                    customerName: this.customerName
                });
                console.log("res.data");
                console.log(res.data);
                this.customerResponse = res.data;
            } catch (error) {
                console.error(error);
            }
        },
        toggleSuccess() {
            this.isSuccess = !this.isSuccess;
        }
    }
})

</script>