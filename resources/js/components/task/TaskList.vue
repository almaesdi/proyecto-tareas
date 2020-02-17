<template>
    <div class="container">

        <!--
        <ul class="list-group tasks">
            <app-task v-for="(task,index) of tasks" v-bind:key="task.id" :task="task" :index="index" v-on:remove="deleteTask"></app-task>
        </ul>-->


        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Task List Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                tasks : null,
            }
        },
        /*beforeRouteEnter (to, from, next) {
            //this.$store.dispatch('getSession')
              //  .then (next);
        },*/
        created(){
            this.$store.dispatch('fetchAllTasks')
                .then(response => {
                    console.log(this.$store.getters.getTasks);
                    this.tasks = this.$store.getters.getTasks;
                })
                .catch(error => {

                })
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
