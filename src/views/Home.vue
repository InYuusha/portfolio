<template>
<v-container>
   <v-toolbar flat  class="mb-7" style="background:inherit">

      <v-toolbar-title id="title" class="font-weight-bold display-1"><span class="text-uppercase font-weight-light">singh</span>ANKUSH</v-toolbar-title>

      <v-spacer></v-spacer>
       <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
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
         <div class="about">



  <v-row  justify="center" class="dark" align="center" style="padding:30px;background:inherit">
    <v-col cols="md-6 sm-8" align="center">
      <v-card  flat  style="background:inherit;border-radius:10px" >
        <v-card-title class="display-3 font-weight-bold mb-4 ">Hello I'am Ankush.</v-card-title>
        <v-card-text>Currently Iam a engineering student at BVPCOEP , Iam a frontend developer , although Iam capable of doing server side programming.

        I am a self taught programming enthusiast , I have done some projects using python then recently I switched to web , I love  vue.js and for backened i learnt node.js
        I have a long way to go, there are a lot of things i want to learn and i think i have only covered a fraction of it, but with every passing day iam more closer to it..
         Iam actively looking for internship oppurtunities.<strong>Offers related to internship are highly welcome !</strong>

        </v-card-text>

      </v-card>

    </v-col>

    <v-col justify="start" align="center" cols="md-5 sm-4" class="offset-md-1">
     <v-carousel cycle show-arrows-on-hover hide-delimiters height="400" >
       <v-carousel-item v-for="(quote,key) in quotes" :key="key"><v-img height="100%" width="150%" :src="quote"></v-img></v-carousel-item>


     </v-carousel>

    </v-col>


  </v-row>
         </div>

  </v-tab-item>
  <v-tab-item :key="pages[1]">
    <v-row class="mb-7">
      <v-col>
        <v-card>
         <v-sheet dark class="secondary" elevation="18"><v-card-title class="offset-5">Skills</v-card-title></v-sheet>
           <v-simple-table height="300px">
          <thead>
            <tr v-for="(skill ,key) in abilities.skills">
              <td>{{skill[0]}}</td>
              <td><v-rating readonly v-model="skill[1]" half-increments small></v-rating></td>
            </tr>
          </thead>
        </v-simple-table>
        </v-card>
      </v-col>
    </v-row >


    <v-row class="mb-7">
      <v-col>
         <v-card>
         <v-sheet dark class="secondary" elevation="18"><v-card-title class="offset-5">Tools</v-card-title></v-sheet>
           <v-simple-table height="300px">
          <thead>
            <tr v-for="(skill ,key) in abilities.tools">
              <td>{{skill[0]}}</td>
              <td><v-rating readonly v-model="skill[1]" half-increments small></v-rating></td>
            </tr>
          </thead>
        </v-simple-table>
        </v-card>
      </v-col>
    </v-row>

      <v-row class="mb-7">
      <v-col>
         <v-card>
         <v-sheet dark class="secondary" elevation="18"><v-card-title class="offset-5">Communication</v-card-title></v-sheet>
           <v-simple-table height="300px">
          <thead>
            <tr v-for="(skill ,key) in abilities.communication">
              <td>{{skill[0]}}</td>
              <td><v-rating readonly v-model="skill[1]" half-increments small></v-rating></td>
            </tr>
          </thead>
        </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-tab-item>

  <v-tab-item :key="pages[2]">
    <div class="project">
       <v-card class="mb-7 offset-1" width="80%" dark v-for="(project ,key) in projects" :key="key">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-img  max-width="400" max-height="350" :src="project.img"></v-img></v-col>
        <v-col cols="6">
          <v-card-title>{{project.title}}</v-card-title>
          <v-card-subtitle>{{project.desc}}</v-card-subtitle>
          <v-card-text>Tools/tech used : {{project.tech}}</v-card-text>
          <v-card-actions>
            <v-btn :href="project.github" icon><v-icon >mdi-github</v-icon></v-btn>

          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>


    </div>

  </v-tab-item>

    <v-tab-item :key="pages[3]" style="max-height:80vh;" >

      <v-app >



           <Navbar />
  <v-main style="max-height:75vh; overflow-y:scroll">
    <Dashboard :posts="posts" />

  </v-main>


  </v-app>




  </v-tab-item>
    <v-tab-item :key="pages[4]">
   <div class="contact"  style="background-color:inherit">
      <v-card  >
      <v-card-title>Lets Talk</v-card-title>
      <v-card-actions>
        <v-btn icon href="mailto:asuse975@gmail.com?subject=subject&cc=cc@example.com"><v-icon x-large>mdi-gmail</v-icon></v-btn>
        <v-btn icon href="https://www.instagram.com/zeldoris_001/" x-large><v-icon  x-large>mdi-instagram</v-icon></v-btn>
        <v-btn icon href="https://github.com/InYuusha" x-large><v-icon >mdi-github</v-icon></v-btn>
      </v-card-actions>
    </v-card>

   </div>
  </v-tab-item>
</v-tabs-items>


</v-container>


</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Dashboard from '../components/Dashboard.vue'


export default {
  name: 'Home',
  components: {
    Dashboard,
    Navbar

  },
  data(){
      return{
      posts:[],
      dialog:false,
      title:"",
      author:"",
      content:"",
    pages:['About','Abilities','Projects','Blog','Contact'],
    tab:null,
    quotes:["https://quotefancy.com/media/wallpaper/3840x2160/1700728-Linus-Torvalds-Quote-Talk-is-cheap-Show-me-the-code.jpg",
    "https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/dream-quotes-nothing-happens-unless-first-a-dream-carl-sandburg-wisdom-quotes.jpg",
    "https://cdn.shopify.com/s/files/1/0017/0432/9285/files/programming-quotes-for-developers-made4dev-code-as-if.jpg?v=1539287546",
    "https://protocoderspoint.com/wp-content/uploads/2020/01/First-solve-the-problem.-Then-write-the-code.jpeg",
    "https://wallpaperaccess.com/full/314827.jpg"],
    projects:[
      {
        title:'Family Diary',
        desc:'Family diary is a diary app for writing about those important people in your life , You can write about their favourite things , you can even rate them accoding to your liking to them',
        github:'https://github.com/InYuusha/InYuusha.github.io',
        link:'https://inyuusha.github.io/',
        tech:"Vue.js ,Firebase firestore, javascript,vuetify ",
        img:'https://assets.devfolio.co/hackathons/7de2289ce08f45da8caa0faa5af96e84/projects/07b9ba018753434aa3a352b827ff7e25/picf614j3fpr.png'
      },
           {
        title:'Portfolio web',
        desc:'A portfolio site using vue.js',
        github:'',
        tech:"Vue.js,vuetify",
        link:'',
        img:'https://assets.devfolio.co/projects/7abfd67bfb0141a79fe77c0568293659/pic9ubull827.png'
      },
           {
        title:'Weather Application',
        desc:'A simple weather application , Enter your city and get weather details...',
        github:'https://github.com/InYuusha/weather',
        tech:"Vue.js, Api , javascript,bootstrap ",
        link:'',
        img:'https://assets.devfolio.co/projects/e6f7de1204aa464cbd03969d333d0528/picmgahlnxui.png'
      },
              {
        title:'A Blog app',
        desc:'A blog application using Node.js , vue.js , mongoose ,  mongodb',
        github:'https://github.com/InYuusha/blog2',
        tech:"Vue.js, Api , javascript, mongodb ",
        link:'',
        img:'https://assets.devfolio.co/projects/dc76c56d6e1a44e784fbaa6404f229bf/pic807xkss92.png'
      },

      ],
      abilities:{
        skills:[
          ['Python',4],['HTML(5)',4],['CSS(3)',4],
          ['Bootstrap Framework',4],['Vuetify',3.5],
          ['JavaScript',3],
          ['Command line Interface',3],
          ['JSON',3],
          ['Vue.js',2.5],['C++',2],['Firebase',1]
        ],
        communication:[
          ['Hindi(Mother Tongue)',4],['English',4],['Japanese(Konichiwa)',1]
        ],
        tools:[
          ['VsCode',3.5],['Postman',2.5],['Git/Github',3],['Figma',3],
          ['Adobe Pohtoshop',3],['Linux',2]
        ]


      }

   }
  },
   mounted(){
      axios.get("http://127.0.0.1:3000/api/posts/all")
      .then(data=>{this.posts=data.data.result})
       .catch(err=>console.log(err))
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