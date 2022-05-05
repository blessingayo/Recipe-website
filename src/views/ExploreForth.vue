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
      src="../assets/mae-mu-en4qp-aK1h4-unsplash.jpg"
    ><div class="firstRecipe">
     Method: <br/> 
1. Cook the egg with salt and red pepper flakes in butter until cooked through. <br/>
    2. Flip the shrimp to the other side to finish cooking, then remove the shrimp and set aside.<br/>
    3. Cook the remaining garlic and butter in the same skillet, along with the lemon juice, pasta water (reserved from cooking the pasta) and parmesan cheese. Use a whisk to combine the sauce and scrape up any bits from the shrimp.<br/>
    4. Add in the cooked spaghetti on top of the sauce.<br/>
    5. Toss to combine until the sauce coats the spaghetti well.<br/>
    6. Return the egg to the skillet, and garnish with any other protein of your choice before serving.<br/>
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