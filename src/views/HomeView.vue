<template>


<v-app>
 
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
<v-toolbar app>
    <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="primary" class="welcome">Food <span class="recipes">Recipe</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-card-actions>
         <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn dark class="pink">Login </v-btn>
      <v-btn  dark class="pink">Signup </v-btn>
      </v-card-actions>
      
        

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
</v-toolbar>
   

    <v-navigation-drawer
      v-model="drawer"
      absolute

       temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link class="explore-btn" to="/">Home</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link class="explore-btn" to="/about">AboutUs</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

<div>
  <v-img class="landImage" 
  src="../assets/jakub-kapusnak-sDbj1dFlFPU-unsplash.jpg"
 
><h1 class="welcome-msg">Welcome To Food <span class="recipe">Recipe</span></h1></v-img>


</div>

<CardView />

</v-app>

</template>

<script>

import "../assets/jakub-kapusnak-sDbj1dFlFPU-unsplash.jpg"
import CardView from "../views/CardView.vue"

  export default {
    name: 'HomeView',
  
components:{
CardView
},

data() {
  return{
    drawer: false,
    group: true,
   
  }
}
   
  }
</script>

<style scoped>

.landImage{
  height: 100vh;
  width: 100vw;
}
.welcome-msg{
  text-align: center;
  padding-top: 20%;
  font-family: "Montserrat";
  color: red;
  font-size:3rem;
}

@media only screen and (max-width : 600px) {
  .welcome-msg{
     padding-top: 90%;
  }
}

.recipe{
  color: green;
}
  .welcome{
    color:red
}

.recipes{
    color: green
}

.explore-btn{
  text-decoration: none;
  color: green;
  font-size: 0.8rem;
}

</style>