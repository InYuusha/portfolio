<template>
<nav>
    <v-toolbar dark>

      <v-toolbar-title  class="text-uppercase font-weight-light" id="title">
            My<span class="text-uppercase font-weight-bold">Blog's</span>
        </v-toolbar-title></a>
        <v-spacer></v-spacer>
        <v-toolbar-items>

        </v-toolbar-items>
    </v-toolbar>

</nav>
</template>

<script>
export default{
    name:'Navbar',

    data:()=>({
        drawer:false,
        newPostDialog:false,
        newPost:{}
    }),
    methods:{
    },

}
</script>
<style>
a,a:hover,a:active,a:focus{
    text-decoration:none;
    color:inherit;
}

#title{
    

    -webkit-text-fill-color:transparent;
    -webkit-background-clip: text;
   background:linear-gradient(to right, rgba(0,55,90,0.82),rgba(244,96,96,0.75))
}
</style>