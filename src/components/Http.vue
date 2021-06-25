<template>
    <section class="src-components-http">
        <div class="jumbotron">
            <h2>Obtener personas</h2>
            <hr>

            <div v-if="getUsers.length" class="table-responsive">
                <table class="table table-dark">
                    <tr>
                        <th v-for="(column, index) in getColumns" :key="index">{{column}}</th>
                    </tr>
                    <tr v-for="(persona, index) in getUsers" :key="index">
                        <td v-for="(column, index) in getColumns" :key="index">{{persona[column]}}</td>
                    </tr>
                </table>
            </div>
            <h4 v-else class="alert alert-danger">No se encontraron personas</h4>
        </div>
    </section>
</template>

<script>
export default {
    name: 'src-components-http',
    props: [],
    mounted() {

    },
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {
        getColumns() {
            return Object.keys(this.getUsers[0])
        },
        getUsers(){
            return this.$store.state.users
        }
    }
}
</script>

<style scoped lang="css">
    .src-components-http{

    }
    .jumbotron {
        background-color: rgb(189, 200, 221);
        color: rgb(2, 2, 128);
    }

    hr {
        background-color: #333;
    }
</style>