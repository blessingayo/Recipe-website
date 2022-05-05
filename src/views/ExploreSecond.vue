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
     class="img-background"
      height="100vh"
      src="../assets/alex-munsell-auIbTAcSH6E-unsplash.jpg"
    ><div class="firstRecipe">
     Method: <br/> 
   1. In an oiled skillet over medium-high heat, sear the steak until cooked all the way through. Remove from the pan.<br/>
2. Add a little more oil, then add the garlic and ginger to the pan. Sauté until soft.<br/>
3. Add the sesame oil, soy sauce, brown sugar, honey, and beef broth. Stir until combined.<br/>
4. Add the broccoli florets.<br/>
5. In a separate bowl, combine cornstarch and water. Add to broccoli mixture. Bring to a boil, until sauce has thickened.<br/>
6. Add the beef back into the mixture, and serve over rice with sesame seeds, if desired. Enjoy!<br/>

      </div>
     
    </v-img>

    </v-main>
       
    
</template>

<script>

export default {
   name: 'ExploreSecond',

data(){
    return{
drawer: false
    }
}
}
</script>


<style scoped>
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

.img-background{
padding-top: 10%;
padding-left: 25%;
}

.firstRecipe{
  height: 70%;
  width: 70%;
  background-color: white;
  opacity: 0.8;
  border-radius: 5%;
  font-weight:900;
  padding: 25px;
  font-size: small;
 
 
}
</style>