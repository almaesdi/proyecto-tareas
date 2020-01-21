<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginSubmit">
            <div class="form-group">
                <label for="name">Email</label>
                <input type="name" class="form-control" placeholder="Nombre" v-model="name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="example@example.com" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>

            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            registerSubmit() {
                console.log('Enviado register');
                this.$store.dispatch('register',{name:this.email,username: this.user,password:this.password});
            }
        }
    }
</script>
