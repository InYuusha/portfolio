<template>
<v-container>

      <v-toolbar flat  class="mb-12" style="background:inherit">

      <v-toolbar-title id="title" class="text-uppercase font-weight-"><span style="font-family:Snell Roundhand, cursive;font-size:30px;" class="text-lowercase  font-weight-light">singh</span>ANKUSH</v-toolbar-title>

      <v-spacer></v-spacer>
       <template v-slot:extension >

          <v-tabs v-model="tab" show-arrows right>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="page in pages"
            :key="page"
          >
            {{ page }}
          </v-tab>
        </v-tabs>




      </template>
      </v-toolbar>




     <v-tabs-items v-model="tab">
       <v-tab-item :key="pages[0]">



  <v-row class="d-flex flex-wrap-reverse "   align="center" style="padding:10px;background:inherit;">
    <v-col cols="md-6 sm-12"  >
      <v-card  flat  style="background:inherit;border-radius:10px" >
      
      <vue-typed-js :backSpeed="80" :loop="true" :typeSpeed="150" :strings="['Hello World !',' I am Ankush']">
        <v-card-title class="display-1 font-weight-bold"><span class="typing"></span></v-card-title>
      </vue-typed-js>
  
        <v-card-text style="font-size:16px">I'm a Javascript developer
          recently I shifted to go , I'v some experience with MEVN stack and

          I've been exploring Serverless, Monolith and Microservices.
          
          Currently Iam learning devOps stuff and trying to socialize.

         I'm actively looking for internship oppurtunities. <strong>Offers related to internship are highly welcome !</strong>

        </v-card-text>

      </v-card>

    </v-col>

    <v-col  cols="md-4 sm-12" class="offset-md-1">
     <v-carousel class="pt-3" cycle interval="3300" show-arrows-on-hover hide-delimiters height="300" >
       <v-carousel-item v-for="(quote,key) in quotes" :key="key"><v-img height="90" min-height="250" min-width="260" width="120%" :src="quote"></v-img></v-carousel-item>


     </v-carousel>

    </v-col>


  </v-row>
       

  </v-tab-item>
  <v-tab-item :key="pages[1]">
    <Abilities/>
  </v-tab-item>


  <v-tab-item :key="pages[2]">
    <Projects/>
  </v-tab-item>


  <v-tab-item :key="pages[3]" style="max-height:80vh;" >
    <Blog/>
  </v-tab-item>

    <v-tab-item :key="pages[4]">
   <div class="contact"  style="background-color:inherit">
      <v-card  >
      <v-card-title>Ask me anything </v-card-title>
      <v-card-subtitle>Wanna collaborate on a project ?</v-card-subtitle>
       <v-card-subtitle>Contact me on </v-card-subtitle>
      <v-card-actions>
        <v-btn icon href="mailto:asuse975@gmail.com?subject=subject&cc=cc@example.com" target="_blank"><v-icon x-large>mdi-gmail</v-icon></v-btn>
        <v-btn icon href="https://www.instagram.com/zeldoris_001/" target="_blank" x-large><v-icon  x-large>mdi-instagram</v-icon></v-btn>
        <v-btn icon href="https://github.com/InYuusha" target="_blank" x-large><v-icon >mdi-github</v-icon></v-btn>
      </v-card-actions>
    </v-card>

   </div>
  </v-tab-item>
</v-tabs-items>


</v-container>


</template>

<script>




import Abilities from './Abilities.vue'
import Projects from './Projects.vue'
import Blog from './Blog.vue'

export default {
  name: 'Home',
  components: {
  
    Abilities,
    Projects,
    Blog

  },
  data(){
      return{

      dialog:false,

    pages:['About','Abilities','Projects','Blog','Contact'],
    tab:null,

    quotes:["https://folio975.s3.ap-south-1.amazonaws.com/go-min.png",
            "https://folio975.s3.ap-south-1.amazonaws.com/p2.webp",
            "https://folio975.s3.ap-south-1.amazonaws.com/p1-min.jpeg",
            "https://folio975.s3.ap-south-1.amazonaws.com/p3-min.jpg",
            "https://folio975.s3.ap-south-1.amazonaws.com/p4-min.jpeg"
            
    ],

   }
  },
 
   methods:{
    toggleDialog(){
      return this.dialog=true
    }
  }
}
</script>
<style>
#title{
  background:linear-gradient(to right , rgb(211, 162, 235),rgb(250, 196, 185),rgb(108, 143, 231),rgb(182, 243, 202));
   -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

}




</style>