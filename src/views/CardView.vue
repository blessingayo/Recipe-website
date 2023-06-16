<template>
    <v-app class="cardContainer">
        <v-main  >
 <div class="cards">
          
  <div>
    <v-row>
    <v-col>
      <v-hover v-slot="{hover}" open-delay="200">
    <v-card  max-width="300" :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}" >
    <v-img
      height="50vh"
      src="../assets/olayinka-babalola-r01ZopTiEV8-unsplash.jpg"
    >
     
    </v-img>
 <v-card-title>Spaghetti and Shrimp Recipe</v-card-title>
    <v-card-subtitle class="pb-0">
      Ingredients
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Spaghetti, Shrimp, Tomatoes, Meat, Spring-Onion, Green-Pepper,
         Red-Pepper, salt, Shrimp or Meat Broth....</div>
    </v-card-text>

    <v-card-actions>
     
      <v-btn
      dark class="pink"
      > <router-link class="explore-btn" to="/explore1">Explore</router-link></v-btn>
     

    </v-card-actions>
  </v-card>
  </v-hover>
    </v-col>
</v-row>
</div>

<div>
<v-row>
    <v-col  >
      <v-hover v-slot="{hover}" open-delay="200">
<v-card
    
    max-width="300" :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}"
  
  >
    <v-img
      height="50vh"
      src="../assets/alex-munsell-auIbTAcSH6E-unsplash.jpg"
    >
     
    </v-img>
 <v-card-title>Stake and Brocolli Recipe</v-card-title>
    <v-card-subtitle class="pb-0">
      Ingredients
    </v-card-subtitle>

    <v-card-text class="text--primary">
       <div>Meat, Shrimp, Brocolli, Stake Sauce, Spring-Onion, Green-Pepper, 
         Red-Pepper, salt, Shrimp or Meat Broth....</div>
    </v-card-text>

    <v-card-actions>
    

      <v-btn
      dark class="pink"
      ><router-link class="explore-btn" to="/explore2">Explore</router-link></v-btn>
    </v-card-actions>
  </v-card>
      </v-hover>
    </v-col>
</v-row>
</div>


<div>
<v-row>
    <v-col  >
      <v-hover v-slot="{hover}" open-delay="200">
<v-card
    
    max-width="300" :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}"
  
  >
    <v-img
      height="50vh"
      src="../assets/sam-moqadam-yxZSAjyToP4-unsplash.jpg"
    >
     
    </v-img>
 <v-card-title>Pancake Recipe</v-card-title>
    <v-card-subtitle class="pb-0">
      Ingredients
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>250ml RSPCA Assured milk, 120g plain flour, 2 RSPCA Assured eggs, 
        Butter, A pinch of salt, Strawberry dressing.</div>
      
    </v-card-text>

    <v-card-actions>
     

      <v-btn
      dark class="pink"
      ><router-link class="explore-btn" to="/explore3">Explore</router-link></v-btn>
    </v-card-actions>
  </v-card>
      </v-hover>
    </v-col>
</v-row>
</div>
</div>



 <div class="second-cards">
          
  <div>
    <v-row>
    <v-col  >
       <v-hover v-slot="{hover}" open-delay="200">
    <v-card  max-width="300" :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}">
    <v-img
      height="50vh"
      src="../assets/mae-mu-en4qp-aK1h4-unsplash.jpg"
    >
     
    </v-img>
 <v-card-title>Spaghetti and Egg Recipe</v-card-title>
    <v-card-subtitle class="pb-0">
      Ingredients
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Spaghetti, 2 Egg, Mushroom, 1 Cucumber and Carrot, 
        salt, Fish, Pepper, Curry, Thyme.</div>
    </v-card-text>

    <v-card-actions>

      <v-btn
      dark class="pink"
      ><router-link class="explore-btn" to="/explore4">Explore</router-link></v-btn>
    </v-card-actions>
  </v-card>
       </v-hover>
    </v-col>
</v-row>
</div>

<div>
<v-row>
    <v-col  >
        <v-hover v-slot="{hover}" open-delay="200">
<v-card
    
    max-width="300" :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}"
  
  >
    <v-img
      height="50vh"
      src="../assets/khloe-arledge--Uca3SGlOag-unsplash.jpg"
    >
     
    </v-img>
 <v-card-title>Rice and Stew Recipe</v-card-title>
    <v-card-subtitle class="pb-0">
      Ingredients
    </v-card-subtitle>

    <v-card-text class="text--primary">
       <div>2cups of Rice, Pepper and Tomatoes blended, Stake Sauce, Meat or any protein of your choice,  
          salt, Curry and Thyme.</div>
    </v-card-text>

    <v-card-actions>

      <v-btn
      dark class="pink"
      ><router-link class="explore-btn" to="/explore5">Explore</router-link></v-btn>
    </v-card-actions>
  </v-card>
        </v-hover>
    </v-col>
</v-row>
</div>


<div>
<v-row>
    <v-col  >
      <v-hover v-slot="{hover}" open-delay="200">
<v-card
    
    max-width="300"  :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}"
  
  >
    <v-img
      height="50vh"
      src="../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash (1).jpg"
    >
      </v-img>
 <v-card-title>Bread and Banana Recipe</v-card-title>
    <v-card-subtitle class="pb-0">
      Ingredients
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Bread of your choice, 1 punch of Ripe Banana, 2 punch Black Berry, Marble Syrup,</div>
      
    </v-card-text> 

    <v-card-actions>

      <v-btn
      dark
      class="pink"
      ><router-link  class="explore-btn" to="/explore6">Explore</router-link></v-btn>
    </v-card-actions>
  </v-card>
      </v-hover>
    </v-col>
</v-row>
</div>
</div>

<div class="addRecipe-btn">
  <v-col>
       <v-hover v-slot="{hover}" open-delay="200">
   <v-btn x-large :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}" dark class="green"><router-link class="addbtn" to="/addRecipes">Click here for more</router-link></v-btn>
       </v-hover>
</v-col>
</div>
        </v-main>
    </v-app>
</template>

<script>


export default {
  name: 'CardView',

 data(){
          
return{
}

    
    }
}


</script>

<style scoped>
.cardContainer{
  padding-top: 10%;
  display: flex;
 
}



  /* .cardContainer:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      } */


.cards{
  width: 85%;
  margin: 0 auto; 
  display: flex;
  justify-content: space-evenly;
  
}


.second-cards{
  width: 85%;
  margin: 0 auto; 
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;
}

.explore-btn{
text-decoration: none;
color:white;
}

.addRecipe-btn{
  padding-top: 5%;
  width:  20%;
  margin: 0 auto;
}

.addbtn{
  text-decoration: none;
  color: white;

}
</style>