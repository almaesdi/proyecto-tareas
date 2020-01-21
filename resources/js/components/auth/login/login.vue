<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="example@example.com" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                password: '',
                validationErrors: ''
            }
        },
        methods: {
            loginSubmit() {
                console.log('Enviado login');
                this.$store.dispatch('login',{username: this.email,password:this.password});
            }
        }
    }
</script>
