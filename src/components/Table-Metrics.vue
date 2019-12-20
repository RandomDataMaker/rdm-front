<template>
    <div>
        <b-table
                :data="metrics.filter(metric => metric.patient_id == patientId)"
                detailed
        >
            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="80" numeric >
                    {{props.row.id}}
                </b-table-column>

                <b-table-column field="patient_id" label="Patient ID" width="80" numeric>
                    {{props.row.patient_id}}
                </b-table-column>

                <b-table-column field="created" label="Created" width="240">
                    {{props.row.created.substring(0,10)}}
                </b-table-column>

                <b-table-column field="notes" label="Notes">
                    {{props.row.notes}}
                </b-table-column>

                <b-table-column field="attributes" label="Attributes">
                    {{props.row.attributes}}
                </b-table-column>
            </template>
            <template slot="detail" slot-scope="props">
                <ul>
                    <li v-for="(value, key) in JSON.parse(props.row.attributes)" :key="key">
                        <b>{{key}}</b>:
                        {{value}}
<!--                        {{attribute.key}} {{attribute.value}}-->
                    </li>
                </ul>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        name: "table-metrics",
        // props:['patientId', 'metrics'],
        props: {
            patientId: {
                type: Number
            },
            metrics: {
                type: Array
            }
        },
        data() {
            return {
                data: [],
            }
        },

    }
</script>

<style scoped>

</style>