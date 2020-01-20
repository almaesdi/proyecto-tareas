<template>
    <div>
        <h2>Register</h2>
        <form @click.prevent="registerSubmit">
            <input type="user" placeholder="user" v-model="user">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: '',
                password: ''
            }
        },
        methods: {
            registerSubmit() {
                console.log('Enviado login');
            }
        }
    }
</script>
