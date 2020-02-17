<template>
        <!--Pantalla universal de carga-->
        <div class="overlay" >
            <!--<span class="fa fa-spinner fa-spin fa-2x w-100"></span>-->
            <span class="spinner-border text-success"></span>
            <br>Loading...
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .overlay {
        background: #ffffff;
        color: #666666;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 5000;
        top: 0;
        left: 0;
        float: left;
        text-align: center;
        padding-top: 25%;
    }
</style>
