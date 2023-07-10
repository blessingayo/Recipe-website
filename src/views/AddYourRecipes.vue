<template>
  <v-main>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="primary" class="welcome"
        >Food <span class="recipesHome">Recipe</span></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn dark class="pink">Login </v-btn>
        <v-btn dark class="pink">Signup </v-btn>
      </v-card-actions>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title
              ><router-link class="explore-btn" to="/"
                >Home</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link class="explore-btn" to="/about"
                >About Us</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="home">
      <h1 class="my-recipe-top">My Recipe</h1>
      <v-btn class="btn-newRecipe" @click="showModal = !showModal"
        >Add new Recipe
      </v-btn>

      <div class="recipes">
        <div
          class="card"
          v-for="recipe in $store.state.recipes"
          :key="recipe.slug"
        >
          <h3>{{ recipe.title }}</h3>
          <h5 class="descrip">{{ recipe.description }}</h5>
          <router-link :to="`/recipe/${recipe.slug}`" class="viewRecipeBtn"
            ><v-btn>View Recipe</v-btn></router-link
          >
        </div>
      </div>

      <div class="add-recipe-popup" v-if="showModal">
        <div class="popup-content">
          <!-- <h4 class="text-center">Add new recipe</h4> -->

          <form @submit.prevent="addNewRecipe">
            <div class="group">
              <label>Title</label>
              <input type="text" v-model="newRecipe.title" />
            </div>

            <div class="group">
              <label>Description </label>
              <textarea v-model="newRecipe.description"></textarea>
            </div>

            <div class="group">
              <label>Ingredients</label>
              <div
                class="ingredient"
                v-for="i in newRecipe.ingredientRows"
                :key="i"
              >
                <input type="text" v-model="newRecipe.ingredients[i - 1]" />
              </div>
              <v-btn type="button" @click="addNewIngredient"
                >Add Ingredient</v-btn
              >
            </div>

            <div class="group">
              <label>Method</label>
              <div class="method" v-for="i in newRecipe.methodRows" :key="i">
                <textarea v-model="newRecipe.method[i - 1]"></textarea>
              </div>
              <v-btn type="button" @click="addNewStep">Add Step</v-btn>
            </div>

            <v-btn type="submit">Add Recipe</v-btn>
            <v-btn type="submit" @click="showModal = !showModal">Close</v-btn>
          </form>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
// import { ref  } from "vue";
// import { useStore } from "@/store";

export default {
  name: "AddYourRecipes",

  data() {
    // let showModal = false;

    const newRecipe = {
      title: "",
      description: "",
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1,
    };

    

    const addNewIngredient = () => {
      newRecipe.ingredientRows++;
    };

    const addNewStep = () => {
      newRecipe.methodRows++;
    };


      // const addRecipeButton = () => {
      //       this.showModal = false
      // }


    const addNewRecipe = () => {
      newRecipe.slug = newRecipe.title.toLowerCase();

      if (!newRecipe.slug) {
        alert("Please enter a title");
        return;
      }

      this.$store.commit("ADD_RECIPE", { ...newRecipe });

      newRecipe.title = "";
      newRecipe.description = "";
      newRecipe.ingredients = [];
      newRecipe.method = [];
      newRecipe.ingredientRows = 1;
      newRecipe.methodRows = 1;
      
     this.showModal = false
    };

    return {
      newRecipe,
      group: true,
      addNewStep,
      addNewIngredient,
      drawer: false,
      addNewRecipe,
      showModal: false,
    };
  },
};
</script>


<style  scoped>
.welcome {
  color: red;
}

.recipesHome {
  color: green;
}

.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my-recipe-top {
  font-size: 2rem;
  /* text-align: center; */
  /* margin-bottom: 32px; */
}

.btn-newRecipe {
  /* margin-left: 1%; */
  margin-top: 20px;
}

.viewRecipeBtn {
  text-decoration: none;
}

.explore-btn {
  text-decoration: none;
  color: green;
  font-size: 0.8rem;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 30px;
}

.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background: pink;
  /* width: 80%;
    margin: 0px auto; */
}

.descrip {
  margin-bottom: 10px;
  margin-top: 5px;
}

.recipes .card p {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.add-recipe-popup {
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-recipe-popup .popup-content {
  background-color: pink;
  padding: 1.5rem;
  border-radius: 1rem;
  height: 100%;
  width: 50vw;
  overflow-y : scroll;
}

@media only screen and (max-width: 600px) {
  .add-recipe-popup .popup-content{
    width: 80vw !important;
     overflow : scroll;
  }


}

.popup-content h2 {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.popup-content .group {
  margin-bottom: 0.5rem;
}

.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}

.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.popup-content .group textarea {
  height: 70px;
  resize: none;
}

.v-btn[type="submit"] {
  margin-right: 1rem;
}
</style>

