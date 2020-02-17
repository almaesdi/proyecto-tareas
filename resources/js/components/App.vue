<template>
    <div class="container-fluid">

        <app-loading v-if="loading"></app-loading>

        <app-navbar></app-navbar>

        <h1>Aplicacion de Tareas</h1>

        <!--
        <ul class="nav nav-tabs">
            <router-link tag="li" active-class="active" exact to="/"><a>Dashboard</a></router-link>
            <router-link tag="li" active-class="active" to="/tasks"><a>Tareas</a></router-link>
        </ul>-->

        <router-view></router-view>

    </div>
</template>

<script>
    import header from 'components/header/Navbar.vue'
    import loading from 'components/Loading.vue'

    export default {
        components : {
            'app-navbar' : header,
            'app-loading': loading,
        },
        created() {
            this.$store.dispatch('getSession')
        },
        computed:{
            loading : function(){
                return this.$store.getters.isLoading;
            }
        },
    }
</script>

<style scoped>

</style>
