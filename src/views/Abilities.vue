<template>

<v-container>
            <v-row class="mb-7" fluid>
      <v-col>
        <v-card >
         <v-sheet style="background:linear-gradient(to right, rgba(0,55,90,0.82),rgba(244,96,96,0.75))" dark  elevation="18"><v-card-title class="justify-center" >Skills</v-card-title></v-sheet>
           <v-simple-table height="300px">
          <thead>
            <tr v-for="(skill ,key) in abilities.skills" :key="key">
               <td>{{skill.name}}</td>
              <td><v-rating readonly v-model="skill.star" half-increments small></v-rating></td>
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
            <tr v-for="(skill ,key) in abilities.tools" :key="key" >
              <td>{{skill.name}}</td>
              <td><v-rating readonly v-model="skill.star" half-increments small></v-rating></td>
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
            <tr v-for="(skill ,key) in abilities.communication" :key="key">
              <td class="mt-2">{{skill.name}}</td>
              <td><v-rating readonly v-model="skill.star" half-increments small></v-rating></td>
            </tr>
          </thead>
        </v-simple-table>
        </v-card>
      </v-col>
    </v-row>

</v-container>

</template>

<script>

export default{
  data(){
      return{
              abilities:{
        skills:[
            {name:'Javascript',star:4},{name:'Tailwind CSS',star:4},
            {name:'Nodejs',star:3.5},{name:'AWS Lambda',star:3},
            {name:'Gin',star:3},{name:'Vuejs',star:3},{name:'REST APIs',star:3},{name:'PWA',star:3},{name:'Expressjs',star:3},{name:'AWS ApiGateway',star:3},{name:'Nuxtjs',star:3},{name:'Container/Docker',star:3},
            {name:'Golang',star:2.5},{name:'Fiber',star:2},{name:'C++',star:2.5},{name:'OOP',star:2.5,},{name:'Mysql',star:2.5},
            {name:'Microservice',star:2},{name:'Python',star:2},{name:'AWS',star:2},
            {name:'Terraform',star:1.5},{name:'Iac',star:1.5},{name:'gRPC',star:1}
            
        ],
        communication:[
         {name:'Hindi',star:4},
         {name:'English',star:3},
         {name:'Japanese (Konichiwa)',star:1}
        ],
        tools:[
         {name:'VSCode',star:4},
         {name:'git/github',star:4},
         {name:'Postman',star:3.5},
         {name:'MySql Workbench',star:3},
         {name:'Docker',star:2},
         
        ]


      }
      }
  }
}
</script>
