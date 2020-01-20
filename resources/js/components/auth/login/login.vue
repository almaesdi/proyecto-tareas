<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginSubmit">
            <input type="user" placeholder="user" v-model="user">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {
                user: '',
                password: ''
            }
        },
        methods: {
            loginSubmit() {
                console.log('Enviado login');
                this.$store.dispatch('login',{username: this.user,password:this.password});
            }
        }
    }
</script>
