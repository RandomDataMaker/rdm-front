<template>
   <div class="small">
       <people-chart
           v-if="loaded"
           :chart-data="chartData"
           :options="options"/>
   </div>
</template>

<script>
    /* eslint-disable no-console */

    import PeopleChart from "./people-chart";
    import axios from "axios";

    export default {
        name: "people-chart-container",
        components: {PeopleChart},
        data: () => ({
            loaded: false,
            data: null,
            chartData: null,
            options: null
        }),
        mounted () {
            this.getData()
        },
        methods: {
            async getData() {
                this.loaded = false;
                    axios.get('http://localhost:8000/person/').then(response => {
                        this.data = response.data;
                        this.fillData(this.data);
                        this.loaded = true;
            })
            },
            fillData: function (data) {
                const years = [];
                const birthdates = {};
                for (const d of data) {
                    const bd = d.birth_date.substring(0, 4);
                    if (!years.includes(bd)) {
                        years.push(bd);
                        birthdates[bd] = 1
                    } else {
                        birthdates[bd] += 1
                    }
                }
                console.log(birthdates);
                this.chartData = {
                    labels: years.sort(),
                    datasets: [
                        {
                            label: "Birthdays",
                            data: Object.values(birthdates)
                        }
                    ]
                }

            }
        }
    }
</script>

<style scoped>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>