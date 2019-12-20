<template>

</template>

<script>
    import axios from "axios";

    export default {
        name: "Table-Metrics",
        data() {
            return {
                data: [],
            }
        },
        mounted() {
            axios.get('http://localhost:8000/metrics/').then(response => (this.data = response.data))
        }
    }
</script>

<style scoped>

</style>