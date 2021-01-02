<template>
<v-container class="fluid pt-8" >
<v-layout wrap>
    <v-flex xs12 md8 offset-md2>
        <h1 class="mb-3">Posts</h1>

    </v-flex xs12 md8 offset-md2>
    <v-flex xs12 md8 offset-md2>
          <v-card  v-if="posts.length==0">
              <v-sheet dark class='grey darken-3'><v-card-title>No Post Yet</v-card-title></v-sheet>
              <v-card-subtitle>No Post have been published</v-card-subtitle>

          </v-card>


            <v-card fluid  dark class="grey darken-3  mb-2" v-for="(post,key) in posts" :key="key">


                  <v-card-title style="cursor:pointer" @click="viewPost(post._id)" class="mb-4">{{post.title}}</v-card-title>
                  <v-card-subtitle>{{post.timestamp}}</v-card-subtitle>

                  <v-card-subtitle>{{post.content}}</v-card-subtitle>
                  <v-card-subtitle>{{post.author}}</v-card-subtitle>

              <v-card-actions>
              <v-btn icon @click="liked(post)"><v-icon :color="post.liked==1?'red':'grey'">mdi-heart</v-icon></v-btn>

              </v-card-actions>

            </v-card>

    </v-flex>
    <v-dialog v-model="postDialog" width="80%">
        <v-card >
            <v-sheet dark class="grey darken-4"><v-card-title>{{data.title}}</v-card-title></v-sheet>
            <v-card-subtitle>{{data.author}}</v-card-subtitle>
            <v-card-text>{{data.content}}</v-card-text>
        </v-card>

    </v-dialog>


</v-layout>
</v-container>

</template>

<script>
import axios from 'axios'
export default{
    name:'Dashboard',
    props:['posts'],
    data:()=>({
          postDialog:false,
          data:{},
          editDialog:false,
          id:'',
          author:'',
          content:'',
          title:'',
    }),
    methods:{
        viewPost(id){
            axios.get(`https://blog975.herokuapp.com/api/post/view/${id}`)
            .then(data=>{this.data=data.data;this.postDialog=true;})
        }
        },
        liked(post){
            if(post.liked==0){
                    axios.post(`https://blog975.herokuapp.com/api/post/like/`,{boo:1,id:post._id})
                    .then(window.location.reload())
            }
            else { axios.post(`https://blog975.herokuapp.com/api/post/like/`,{boo:0,id:post._id})
                   .then(window.location.reload())
            }
        },
        editBlog(post){
            this.editDialog=true;
            this.id=post._id;
            this.content=post.content;
            this.title=post.title;
            this.author=post.author;
        },
        pass(){

        }
    }


</script>