<template>
    <v-main>
 
<v-toolbar app >
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

     <v-img
    
      height="100vh"
      src="../assets/pexels-rodnae-productions-8581015.jpg"
    ><h3 class="welcomes welcome-msg text-uppercase" >It's all about making something that feeds your soul and family, it doesn't matter how we get there complicated or simple. <span class="recipes"></span></h3></v-img>


 <div  class="about-msg "> <h4 class="white--text  container">"I never cut corners when it comes to flavour, but there are many tricks that
   i've learnt over the years for saving time when cooking. In this 
   online-recipe-book i share this knowledge and my experience to help you produce
   amazing meals fast. These are my go-to recipes when time is 
   short. Using bold flavors and clever labor-saving cheats, I know I can 
   produce top-quality food in under 30minutes. And now with this book, so can you."</h4></div>

   
    </v-main>
       
    
</template>

<script>

export default {
   name: 'ExploreThird',

data(){
    return{
drawer: false
    }
}
}
</script>


<style scoped>
.welcomes{
    color: rgb(0, 116, 0);
    
}

.welcome{
  color: red;
}

.recipes{
    color: green
}

.welcome-msg{
 padding-top: 10%;
 padding-left: 70px;
 width: 50%;
 }

 @media only screen and (max-width: 600px){
  .welcome-msg{
    width: 100% !important;
    margin-top: 40px;
    padding-top: 100px !important;
    padding-left: 10px !important;
  }
 }

.img-container{
   padding-top: 5%;
}

.about-msg{
  height: 50%;
  width: 60%;
  margin: 0 auto;
  background-color: rgb(255, 28, 66);

 }

@media only screen and (max-width: 600px) {
  .about-msg{
    width: 90% !important;
    height: 40% !important;
  }
}

.container{
  width: 80%;
  padding-top: 20%;
  text-align: center;
}

.explore-btn{
  text-decoration: none;
  color: green;
  font-size: 0.8rem;
}

</style>