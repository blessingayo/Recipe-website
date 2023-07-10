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
      src="../assets/khloe-arledge--Uca3SGlOag-unsplash.jpg"
    >
    <div style="display: flex; justify-content: center; align-items: center; ">
    <div class="firstRecipe">
     Method: <br/> 
     1. Parboil the rice using the method detailed in How to Parboil Rice for Cooking White Rice.<br/> 
     2. Pour the rice in a sieve to drain out the hot water.<br/> 
     3. Dip in cold water, then wash and drain.<br/> 
     4. Meanwhile set some water to boil in a pot big enough to accommodate the rice bearing in mind that the rice will rise some more. The extent of rising depends on the type of rice and for how long it was parboiled.<br/> 
     5. Add the parboiled rice and salt (optional). Check to see that the water level is just about the same as the rice.<br/> 
     6. Cook till the water is just about drying up. Check that the rice is done. If not, add more water and keep cooking.<br/> 
     7. Keep checking till the rice is done. Leave to dry completely. This is usually confirmed by a ticking sound coming from the pot.<br/> 
    </div>
    </div>
    </v-img>

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
.welcome{
    color: red
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
  margin: 0 auto;
  background-color: white;
  opacity: 0.8;
  border-radius: 5%;
  font-weight:900;
  padding: 25px;
  font-size: small;
}

@media only screen and (max-width: 600px) {
  .firstRecipe{
        width: 100vw !important;
    /* text-align: center; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
}

</style>