<template>
<nav>
    <v-toolbar dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
     <a flat href="http://127.0.0.1:3000/">   <v-toolbar-title  class="text-uppercase font-weight-light">
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
</style>