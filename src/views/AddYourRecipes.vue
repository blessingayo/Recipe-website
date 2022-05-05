<template>
   <v-main>

       <v-toolbar app >
    <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="primary" class="welcome">Food <span class="recipesHome">Recipe</span></v-toolbar-title>
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
            <v-list-item-title><router-link class="explore-btn" to="/about">About Us</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

<div class="home">
    <h1 class="my-recipe-top">My Recipe</h1>
    <v-btn  class="btn-newRecipe" @click="showModal = !showModal">Add new Recipe </v-btn>


<div class="recipes">
 <div class="card"  v-for="recipe in $store.state.recipes" :key="recipe.slug" >
    <h3>{{recipe.title}}</h3>
    <h5 class="descrip">{{ recipe.description }}</h5>
    <router-link  :to="`/recipe/${recipe.slug}`"><v-btn>View Recipe</v-btn></router-link>
 </div>

    </div>
    

    <div class="add-recipe-popup" v-if="showModal" >
        <div class="popup-content">
            <h4 class="text-center">Add new recipe</h4>

            <form @submit.prevent="addNewRecipe">
                <div class="group">
                    <label >Title</label>
                    <input type="text"  v-model="newRecipe.title" />
                </div>

                   <div class="group">
                    <label >Description </label>
                    <textarea v-model="newRecipe.description" ></textarea>
                </div>

                      <div class="group">
                    <label >Ingredients</label>
                   <div class="ingredient"  v-for="i  in newRecipe.ingredientRows"  :key="i">
                       <input type="text" v-model="newRecipe.ingredients[i - 1]" />
                   </div>
                      <v-btn type="button" @click="addNewIngredient">Add Ingredient</v-btn>
                </div>

                      <div class="group">
                    <label >Method</label>
                   <div class="method" v-for="i in newRecipe.methodRows" :key="i">
                      <textarea  v-model="newRecipe.method[i - 1]"></textarea>
                   </div>
                  <v-btn type="button" @click="addNewStep">Add Step</v-btn>
                </div>

           <v-btn type="submit" @click=" addNewRecipe">Add Recipe</v-btn>
           <v-btn type="submit" @click="showModal = !showModal">Close</v-btn>
            </form>
        </div>
    </div>
</div>

</v-main>
</template>

<script>
// import { ref  } from "vue";
import { useStore } from "@/store";


export default {
    name: "AddYourRecipes",

    data() {
          
        const newRecipe = {
            title: "",
            description: "",
            ingredients: [],
            method: [],
            ingredientRows: 1,
            methodRows: 1,
        }
      const store = useStore

       const addNewIngredient = () => {
            newRecipe.ingredientRows++;
        }
       
       const addNewStep   = () => {
           newRecipe.methodRows++;
       }

const addNewRecipe = () => {
  newRecipe.slug = newRecipe.title.toLowerCase();

  if( !newRecipe.slug ) {
    alert("Please enter a title");
    return;
  }

  store.commit('ADD_RECIPE',  {...newRecipe});

// let newRecipe = {
//             title: "",
//             description: "",
//             ingredients: [],
//             method: [],
//             ingredientRows: 1,
//             methodRows: 1,
//         }
  
    //  showModal = !showModal;
}
      

      

      return{
            newRecipe,
             addNewStep,
             addNewIngredient,
           drawer: false,
          addNewRecipe,
            showModal :  false

           
     }
 },
}
</script>


<style  scoped>

 .welcome{
    color:red
}

.recipesHome{
    color: green
}


.home{
     padding: 1rem;
     display: flex;
     flex-direction: column;
     align-items: center;

}

.my-recipe-top{
font-size: 2rem;
/* text-align: center; */
/* margin-bottom: 32px; */
}

.btn-newRecipe{
/* margin-left: 1%; */
margin-top: 20px;
}

.recipes{
display: flex;
justify-content: space-between;
margin-top: 30px;
  }

.recipes   .card{
  padding: 1rem ;
    border-radius: 5px;
    margin: 1rem;
    background: pink;
   }

.descrip{
margin-bottom: 10px;
margin-top: 5px
}

.recipes .card p{
    font-size: 1rem ;
    line-height: 1.4;
    margin-bottom: 1rem;
}


.add-recipe-popup{
   position:fixed;
   top: 0px;
   bottom: 0px;
    width: 100%;
    height: 100%; 
     background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .add-recipe-popup .popup-content{
        background-color: pink;
        padding: 1.5rem;
        border-radius: 1rem;
        height: 100%;
        width: 50vw;
    }

.popup-content h2{
    font-size: 1rem;
    margin-bottom: 1rem;
}
.popup-content .group{
    margin-bottom: 0.5rem;
}

.popup-content .group label{
    display: block;
    margin-bottom: 0.5rem;
}

.popup-content .group input,
.popup-content .group textarea{
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 2px solid white;
    border-radius: 5px;
    margin-bottom: 0.5rem;
}
    
    .popup-content .group textarea{
        height: 70px;
        resize: none;
    }

    .v-btn[type="submit"]{
        margin-right: 1rem;
    }

    
</style>

