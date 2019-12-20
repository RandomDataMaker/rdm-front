import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    data:{
        test:'test'
    }
}).$mount('#app')
