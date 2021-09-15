<template>

    <v-container >
        <Navbar />
    <v-main style="max-height:75vh; overflow-y:scroll">
        <Dashboard :posts="posts" />
    </v-main>

     <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by..
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
        </v-container>

</template>
<script>
import axios from 'axios'

import Navbar from '../components/Navbar.vue'
import Dashboard from '../components/Dashboard.vue'

export default{

    components:{
        Dashboard,
        Navbar
    },
      mounted(){
       
          this.getPosts();
          setTimeout(this.getPosts,8000)

  },
  data(){
      return{
          posts:[],
          loading:true
      }
  },
  methods:{
         getPosts(){
                  axios.get("https://blog975.herokuapp.com/api/posts/all")
                  .then(data=>{
                            this.posts=data.data.result.reverse();
                            this.loading=false;
                  })
                 .catch(err=>console.log(err))
        }
  }
}

</script>
