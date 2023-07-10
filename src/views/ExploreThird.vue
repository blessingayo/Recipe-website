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
      src="../assets/sam-moqadam-yxZSAjyToP4-unsplash.jpg"
    >
        <div style="display: flex; justify-content: center; align-items: center; ">
    <div class="firstRecipe">
     Method: <br/> 
1. Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.<br/>

2. Set aside for 30 mins to rest if you have time, or start cooking straight away.<br/>

3. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.<br/>

4. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. <br/>

5. Serve with strawberry and blackberry dressing with syrup

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
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}
</style>