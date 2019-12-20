<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
        <div id="header"></div>
<!--        <div class="face">-->
<!--            <img :src="image" :width="size">-->
<!--        </div>-->
<!--        <div class="face-info">-->
<!--            {{ faceinfo }}-->
<!--            <a :href="person_details">MORE</a>-->
<!--            <p v-if="alive">Żyje</p>-->
<!--            <p v-else>Umarł</p>-->
<!--            <button @click="clickTest">Click</button>-->
<!--        </div>-->
       <table-people></table-people>
    </div>
</template>

<script>
    import Vue from 'vue';
    import TablePeople from "./components/Table-People";
    // import VueFluent from 'vue-fluent';
    // import 'vue-fluent/dist/vue-fluent.min.css';
    // Vue.use(VueFluent)
    import Buefy from 'buefy';
    import 'buefy/dist/buefy.css'
    Vue.use(Buefy)

    export default {
        name: 'app',
        components: {TablePeople},
        data() {
            return {
                product: 'It\'s working!',
                faceinfo: "Tom Tester",
                size: "100px",
                person_details: "http://putelita.pl",
                alive: true
            }
        },
        methods: {
            clickTest() {
                this.alive = !this.alive
            }
        }
    }

</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

    #header {
        margin-bottom: 100px;
        height: 100px;
        background-color: hsl(120, 100%, 50%);
        background: linear-gradient(90deg, hsl(220, 70%, 50%), hsl(260, 50%, 50%));
    }
</style>
