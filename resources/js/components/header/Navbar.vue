<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>

                <template v-if="isLoggedIn">
                    <!--<li class="nav-item">
                        <a class="nav-link" href="#">Tareas</a>
                    </li>-->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tareas
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Mis tareas</a>
                            <a class="dropdown-item" href="#">Todas las Tareas</a>
                        <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </template>
            </ul>

            <app-navbar-user></app-navbar-user>

            <!-- use the modal component, pass in the prop -->
            <!--<app-navbar-user v-if="showModal" @close="showModal = false"></app-navbar-user>-->

            <!--<form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>-->

        </div>
    </nav>
</template>

<script>

import navbarUser from './Navbar-user.vue'

export default {
    data (){
        return {
            isLogged: false,
        }
    },
    components: {
        'app-navbar-user' : navbarUser,
    },
    computed : {
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        },
    },
}
</script>

<style>

</style>
