    import { Line, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins;
    export default {
        name: "people-chart",
        extends: Line,
        mixins: [reactiveProp],
        props: {
          data: {
              type: Object,
              default: null
          },
          options: {
              type: Object,
              default: null
          }
        },
        mounted() {
            this.renderChart(this.chartData, this.options)
        }
    }
