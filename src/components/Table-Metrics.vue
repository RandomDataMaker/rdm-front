<template>
    <div>
<!--        <b-table-->
<!--                :data="this.metrics"-->
<!--        >-->
<!--            <template slot-scope="props">-->
<!--                <b-table-column field="id" label="ID" numeric>-->
<!--                    {{data}}-->
<!--                    {{this.metrics}}-->
<!--                    {{this.patientId}}-->
<!--                    {{props.row.id}}-->
<!--                </b-table-column>-->
<!--            </template>-->
<!--        </b-table>-->
    </div>
</template>

<script>
    export default {
        name: "table-metrics",
        data() {
            return {
                data: [],
            }
        },
        props:['patientId', 'metrics'],
    }
</script>

<style scoped>

</style>