<template>
    <div>
        <section id="metrics">
        </section>
        <section id="table">
            <b-table
                    :data="data"
                    :paginated="true"
                    :per-page="10"
                    detailed
            >
                <template slot-scope="props">
                    <b-table-column field="id" label="ID" width="80" sortable numeric>
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column field="first_name" label="First Name" sortable searchable>
                        {{ props.row.first_name}}
                    </b-table-column>

                    <b-table-column field="last_name" label="Last Name" sortable searchable>
                        {{ props.row.last_name}}
                    </b-table-column>

                    <b-table-column field="birth_date" label="Birthday" sortable searchable>
                        {{ props.row.birth_date.substring(0,10)}}
                    </b-table-column>

                    <b-table-column field="sex" label="Gender" width="140" centered sortable numeric>
                    <span>
                        <b-icon pack="fas"
                                :icon="props.row.sex == 1 ? 'mars' : 'venus'">
                        </b-icon>
                    </span>
                    </b-table-column>

                    <b-table-column field="pesel" label="PESEL" sortable searchable>
                        {{ props.row.pesel}}
                    </b-table-column>
                </template>
                <template slot="detail" slot-scope="props">
                    <table-metrics :patient-id="props.row.id" :metrics="metrics" :attributes="attributes"></table-metrics>
                </template>
            </b-table>
        </section>
    </div>
    <!--   <p> {{info}}</p>-->
</template>

<script>
    import axios from "axios";
    import TableMetrics from "./Table-Metrics";

    export default {
        name: "table-people",
        components: {TableMetrics},
        data() {
            return {
                data: [],
                metrics: [],
                attributes: [],
            }
        },
        mounted() {
            axios.get('http://localhost:8000/person/').then(response => (this.data = response.data)),
                axios.get('http://localhost:8000/metrics/').then(response => (this.metrics = response.data)),
                axios.get('http://localhost:8000/attributes/').then(response => (this.attributes = response.data))
        }
    }
</script>

<style scoped>
    #table {
        margin: 2em;
    }
</style>