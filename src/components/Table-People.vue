<template>
   <div>
       <section>
           <b-table
                   :data="data"
                   :columns="columns"
                   :paginated="true"
                   :per-page="10"
           >
               <template slot-scope="props">
                   <b-table-column field="id" label="ID" width="80" sortable numeric>
                       {{ props.row.id }}
                   </b-table-column>

                   <b-table-column field="name" label="First Name" sortable searchable>
                    {{ props.row.name}}
                   </b-table-column>

                   <b-table-column field="surname" label="Last Name" sortable searchable>
                       {{ props.row.surname}}
                   </b-table-column>

                   <b-table-column field="birthday" label="Birthday" sortable searchable >
                       {{ props.row.birthday}}
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
           </b-table>
       </section>
   </div>
<!--   <p> {{info}}</p>-->
</template>

<script>
    import axios from "axios";

    export default {
        name: "table-people",
        data() {
          return {
              data: [],
              columns: [
                  {
                      field: 'id',
                      label: "ID",
                      width: '80',
                      numeric: true,
                      sortable: true,
                  },
                  {
                      field: 'name',
                      label: 'First Name',
                      searchable: true,
                      sortable: true,
                  },
                  {
                      field: 'surname',
                      label: 'Last Name',
                      searchable: true,
                      sortable: true,
                  },
                  {
                      field: 'birthday',
                      label: 'Date',
                      sortable: true,
                      searchable: true,
                      centered: true,
                  },
                  {
                      field: 'sex',
                      label: 'Gender',
                      width: '120',
                      centered: true,
                      sortable: true,
                  },
                  {
                      field: 'pesel',
                      label: 'PESEL',
                      searchable: true,
                      sortable: true,
                  }
              ]
          }
        },
        mounted() {
            axios.get('http://localhost:8000/person/').then(response => (this.data = response.data))
        }
    }
</script>

<style scoped>
</style>