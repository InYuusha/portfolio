<template>
    <div class="project">
       <v-card class="mb-7 offset-1" width="80%" dark v-for="(project ,key) in projects" :key="key">

      <v-row class="d-flex flex-wrap" align="center" justify="center">

        <v-col cols="md-6 sm-12">
          <v-img  max-width="400" max-height="450" :src="project.img"></v-img>
          <vue-player style="width:300px" v-if="project.vid" :src="project.vid.vidLink" :poster="project.vid.vidThumb" :title="project.vid.title" ></vue-player>
          </v-col>

        <v-col cols="md-6 sm-12"  >
          <v-card-title>{{project.title}}</v-card-title>
          <v-card-subtitle>{{project.desc}}</v-card-subtitle>
          <v-chip class="mx-1" v-for="(tool,key) in project.tech" :key="key" color="indigo">{{tool}} </v-chip>
          <v-card-actions>
            <v-btn :href="project.github" icon><v-icon >mdi-github</v-icon></v-btn>
            <v-btn v-if="project.link.length!=0" :href="project.link" icon ><v-icon>mdi-application</v-icon></v-btn>
            <v-chip  v-else><v-icon>mdi-close</v-icon>No working link found</v-chip>

          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>


    </div>
</template>

<script>
import vuePlayer  from  '@algoz098/vue-player'
export default{

    components:{
        vuePlayer
    },
    data(){
          return{
                projects:[
                       {
        title:'Realtime Notification System',
        desc:'Notification system , Implemented websockets used serverless architecture and implemented authentication using authoriser. Used dynamoDb for storing client data.',
        github:'https://github.com/InYuusha/notificationSystem',
        tech:['AWS Lambda','Nodejs','AWS Apigateway','Websockets','Dynamodb','Mysql'],
        link:'',
        img:'https://miro.medium.com/max/1400/1*cK1Fb7RsEuzlnnPC3zgrog.png'
      },
        {
        title:'Travel Buddy',
        desc:'Travel Buddy is travel blog app , You can create your account and share your travel stories with other',
        github:'https://github.com/InYuusha/travelBuddy',
        link:'',
        tech:['Express', 'Nodejs', 'mysql', 'mongodb','bcrypt','Passport' ,'Ejs'],
        vid:{
          vidLink:'https://folio975.s3.ap-south-1.amazonaws.com/travel.mp4',
        vidThumb:'https://folio975.s3.ap-south-1.amazonaws.com/travel.png',
        title:"Travel Blogs"
        }
      },
         {
        title:'AnimDaemon',
        desc:'A Cross-platform anime quote application with Server-side-rendering and Pwa implementation',
        github:'https://github.com/InYuusha/animeQuotesBasic',
          tech:['Nuxtjs','Vuejs','Api','Tailwind Css'],
        link:'https://animdaemon.vercel.app/',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/71c81d1b9bf14ad497553e5dceefd7cb/20149018-6967-4071-8c6c-f52a44b30be3.jpeg'
      },
         {
        title:'My Tech blogs',
        desc:'A Demo Full-stack app ',
        github:'https://github.com/InYuusha/gallery',
        tech:['Vue.js','Node.js','MongoDB','Vuetify','Express'],
        link:'',
        vid:{
          vidLink:'https://folio975.s3.ap-south-1.amazonaws.com/vuex.mp4',
        vidThumb:'https://folio975.s3.ap-south-1.amazonaws.com/vuex.png',
        title:'Tech Blogs'
        }
        
      },
   
              
                  {
        title:'A Realtime Chat App',
        desc:'A Realtime Chat App with sockets',
        github:'https://github.com/InYuusha/chat_app',
        tech:['Socket.io','Node.js','Express','JavaScript','Bootstrap'],
        link:'',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/2e95837c673a4a2ba3e6cccb729b2622/pici97w79ut1.png'
      },
         /*  {
        title:'Personal Portfolio',
        desc:'A Portfolio site using vue.js',
        github:'https://github.com/InYuusha/portfolio',
        tech:['Vue.js','Node.js','MongoDB','Vuetify'],
        link:'http://inyuusha975.netlify.app',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/7abfd67bfb0141a79fe77c0568293659/0dd06d2b-371d-47a3-8a47-b6ddd99f8b56.png'
      },
        */
              {
        title:'A Blog app',
        desc:'A CRUD based Blog application',
        github:'https://github.com/InYuusha/blog2',
        tech:['Vue.js','Node.js','MongoDB','Vuetify','Api'],
        link:'http://blog975.netlify.app',
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/dc76c56d6e1a44e784fbaa6404f229bf/picxy298td0t.png'
      },
         {
        title:'Realtime Cpu Usage',
        desc:'Cpu stat gui application using golang, implemented data binding between frontend and backend',
        github:'https://github.com/InYuusha/goWails',
        link:'',
        tech:['Vue.js','Wails','Golang'],
        img:'https://devfolio-prod.s3.ap-south-1.amazonaws.com/projects/4c24210db76d4326a909235f72be11ad/f4686d44-22ce-4730-9c9e-ba7f37788e00.png'
      },

    

      ]
          }
    }
}
</script>
