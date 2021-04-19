<template>
<v-container>

      <v-toolbar flat  class="mb-7" style="background:inherit">

      <v-toolbar-title id="title" class="font-weight-bold display-1"><span class="text-uppercase font-weight-light">singh</span>ANKUSH</v-toolbar-title>

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



  <v-row class="d-flex flex-wrap-reverse"   align="center" style="padding:5px;background:inherit">
    <v-col cols="md-6 sm-12"  >
      <v-card  flat  style="background:inherit;border-radius:10px" >
      
      <vue-typed-js :backSpeed="80" :loop="true" :typeSpeed="150" :strings="['Hello !',' Iam Ankush']">
        <v-card-title class="display-1 font-weight-bold"><span class="typing"></span></v-card-title>
      </vue-typed-js>
  
        <v-card-text>Currently Iam a engineering student at BVPCOEP .

        Iam a self taught programming enthusiast and a full-stack developer. I have done some projects using python then recently I switched to web . I love  vue.js and for backened , I know node.js
        I think have a long way to go, there are a lot of things I want to learn and I think I have only covered a fraction of it, but with every passing day Iam more closer to it..
       And that really gives me hope :). Currently Iam learning devops .
         Iam actively looking for internship oppurtunities.<strong>Offers related to internship are highly welcome !</strong>

        </v-card-text>

      </v-card>

    </v-col>

    <v-col  cols="md-4 sm-12" class="offset-md-1">
     <v-carousel cycle interval="3300" show-arrows-on-hover hide-delimiters height="300" >
       <v-carousel-item v-for="(quote,key) in quotes" :key="key"><v-img height="90%" width="120%" :src="quote"></v-img></v-carousel-item>


     </v-carousel>

    </v-col>


  </v-row>
       

  </v-tab-item>
  <v-tab-item :key="pages[1]">
    <v-row class="mb-7" fluid>
      <v-col>
        <v-card >
         <v-sheet style="background:linear-gradient(to right, rgba(0,55,90,0.82),rgba(244,96,96,0.75))" dark  elevation="18"><v-card-title class="justify-center" >Skills</v-card-title></v-sheet>
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
         <v-card >
         <v-sheet dark style="background:linear-gradient(to right, rgba(0,55,90,0.82),rgba(244,96,96,0.75))" elevation="18"><v-card-title class="justify-center">Tools</v-card-title></v-sheet>
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
         <v-sheet style="background:linear-gradient(to right, rgba(0,55,90,0.82),rgba(244,96,96,0.75))" elevation="18"><v-card-title class="justify-center" >Communication</v-card-title></v-sheet>
           <v-simple-table height="300px">
          <thead>
            <tr v-for="(skill ,key) in abilities.communication">
              <td class="mt-2">{{skill[0]}}</td>
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
        <v-col cols="md-6 sm-12">
          <v-img  max-width="400" max-height="450" :src="project.img"></v-img>
          <vue-player v-if="project.vid" :src="require(`${project.vid.vidLink}`)" :poster="require(`${project.vid.vidThumb}`)" :title="project.vid.title" ></vue-player>
          </v-col>
        <v-col cols="md-6 sm-12">
          <v-card-title>{{project.title}}</v-card-title>
          <v-card-subtitle>{{project.desc}}</v-card-subtitle>
          <v-chip class="mx-1" v-for="(tool,key) in project.tech" color="indigo">{{tool}} </v-chip>
          <v-card-actions>
            <v-btn :href="project.github" icon><v-icon >mdi-github</v-icon></v-btn>
            <v-btn v-if="project.link.length!=0" :href="project.link" icon ><v-icon>mdi-application</v-icon></v-btn>
            <v-chip  v-else><v-icon>mdi-close</v-icon>No working link found</v-chip>

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
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Dashboard from '../components/Dashboard.vue'
import vuePlayer  from  '@algoz098/vue-player'

export default {
  name: 'Home',
  components: {
    Dashboard,
    Navbar,
    vuePlayer

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
    quotes:["https://www.adaptnetwork.com/inspirational-quotes/wp-content/uploads/2017/12/inspirational-quotes-best-dreams-happen-awake.jpg",
    "https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/dream-quotes-nothing-happens-unless-first-a-dream-carl-sandburg-wisdom-quotes.jpg",
    "https://cdn.shopify.com/s/files/1/0017/0432/9285/files/programming-quotes-for-developers-made4dev-code-as-if.jpg?v=1539287546",
    "https://protocoderspoint.com/wp-content/uploads/2020/01/First-solve-the-problem.-Then-write-the-code.jpeg",
    "https://wallpaperaccess.com/full/314827.jpg",
    "https://c4.wallpaperflare.com/wallpaper/836/933/123/keep-calm-coder-programming-code-wallpaper-preview.jpg"],
    projects:[
        {
        title:'Travel Buddy',
        desc:'Travel Buddy is travel blog app , You can create your account and share your travel stories with other',
        github:'https://github.com/InYuusha/travelBuddy',
        link:'',
        tech:['Express', 'Nodejs', 'mysql', 'mongodb','bcrypt','Passport' ,'Ejs'],
        vid:{
          vidLink:'./travel.mp4',
        vidThumb:'./travel.png',
        title:"Travel Blogs"
        }
      },
         {
        title:'My Tech blogs',
        desc:'A Demo Full-stack app ',
        github:'https://github.com/InYuusha/gallery',
        tech:['Vue.js','Node.js','MongoDB','Vuetify','Express'],
        link:'',
        vid:{
          vidLink:'./vuex.mp4',
        vidThumb:'./vuex.png',
        title:'Tech Blogs'
        }
        
      },
   
                   {
        title:'User Authentication System',
        desc:'User Authentication using Node.js  , mongoose ,  mongodb , passport.js',
        github:'https://github.com/InYuusha/user_auth',
        tech:['Passport.js','Node.js','MongoDB','bcrypt'],
        link:'http://auth975.herokuapp.com',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/343036c7a94842ca9d7058089cec1034/pickqkdhig36.png'
      },
                  {
        title:'A Realtime Chat App',
        desc:'A Realtime Chat App with sockets',
        github:'https://github.com/InYuusha/chat_app',
        tech:['Socket.io','Node.js','Express','JavaScript','Bootstrap'],
        link:'',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/2e95837c673a4a2ba3e6cccb729b2622/pici97w79ut1.png'
      },
           {
        title:'Personal Portfolio',
        desc:'A Portfolio site using vue.js',
        github:'https://github.com/InYuusha/portfolio',
        tech:['Vue.js','Node.js','MongoDB','Vuetify'],
        link:'http://inyuusha975.netlify.app',
        img:'https://assets.devfolio.co/projects/7abfd67bfb0141a79fe77c0568293659/pic9ubull827.png'
      },
           {
        title:'Weather Application',
        desc:'A Simple weather application , Enter your city and get weather details...',
        github:'https://github.com/InYuusha/weather',
          tech:['Express.js','Node.js','Api','Bootstrap'],
        link:'',
        img:'https://assets.devfolio.co/projects/e6f7de1204aa464cbd03969d333d0528/picmgahlnxui.png'
      },
              {
        title:'A Blog app (Admin)',
        desc:'A CRUD based Blog application',
        github:'https://github.com/InYuusha/blog2',
        tech:['Vue.js','Node.js','MongoDB','Vuetify','Api'],
        link:'http://blog975.netlify.app',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/dc76c56d6e1a44e784fbaa6404f229bf/picxy298td0t.png'
      },
         {
        title:'Family Diary',
        desc:'Family diary is a diary app for writing about those important people in your life , You can write about their favourite things , you can even rate them accoding to your liking to them. frontend hosted on netlify , backend hosted on heroku.',
        github:'https://github.com/InYuusha/family-dairy',
        link:'http://family975.netlify.app',
        tech:['Vue.js','Node.js','MongoDB','Vuetify'],
        img:'https://assets.devfolio.co/hackathons/7de2289ce08f45da8caa0faa5af96e84/projects/07b9ba018753434aa3a352b827ff7e25/picf614j3fpr.png'
      },

    

      ],
      abilities:{
        skills:[
         ['HTML(5)',4],['CSS(3)',4],
          ['Bootstrap Framework',4],['Python',4],['Vuetify',3.5],['Mongodb',3.5],
          ['Command line Interface',3],['Mysql',3],
          ['JSON',3],['Networking',3],['DevOps fundamentals',3],
          ['Vue.js',3],['C++',2],['Firebase',1]
        ],
        communication:[
          ['Hindi (Mother Tongue)',4],['English',4],['Japanese( Konichiwa)',1]
        ],
        tools:[
          ['VsCode',3.5],['Postman',2.5],['Git/Github',3],['Figma',3],
          ['Adobe Pohtoshop',3],['Linux',3],['Docker',2.5]
        ]


      }

   }
  },
   mounted(){
      axios.get("https://blog975.herokuapp.com/api/posts/all")
      .then(data=>{this.posts=data.data.result.reverse()})
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