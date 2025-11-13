<script setup lang="ts">
import { ref } from "vue";


// import AddFile from "./components/AddFile.vue";
// import HelloWorld from './components/HelloWorld.vue'
import CreateRandomNums from "./components/CreateRandomNums.vue";
import ShowMouseCoordinates from "./components/ShowMouseCoordinates.vue";
import ButtonHideShowText from "./components/ButtonHideShowText.vue";
import ProgressBar from "./components/ProgressBar.vue";
import NewsList from "./components/NewsList.vue";
import ThirdHomeTask from "./components/ThirdHomeTask.vue";

// одна '.' - ищет в этой папке
// две '..' - ищет в родительской папке
import UsersForum from "./components/UsersForum.vue";
import HomeWork from "./components/HomeWork.vue";
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import BookList from "./components/BookList.vue";

const mass = [1, 2, 3, 4, 5]
console.log(Object.keys(mass).length);

mass.push(6)
let test = mass.map(e=> e*2)
console.log(test);

// mass.value.filter(e=>console.log(e));

const original = {
  name: "John",
  age: 30,
  address: {
    city: "Moscow",
    street: "Lenina"
  },
  hobbies: ["reading", "sports"]
};

const dublicate = {...original}
dublicate.name = 'Peter'
dublicate.address.city = 'SPB'

original.address.city = 'MSC'
console.log(dublicate.address.city);

original.name = 'Ivan'
console.log(dublicate.name);

const deepCopy2 = structuredClone(original);
deepCopy2.name = 'Light'
original.name = 'Original'
console.log(deepCopy2);


type User = {
  id: number;
  name: string;
  email?: string; // Необязательное свойство
}

const user:User = {
  id : 23,
  name : 'Jonn',
  // email : 23,
}

//! кортежи
type coordinate = [x:number, y:number]
let mouseCoord:coordinate = [10, 20]
console.log(mouseCoord[0]);
 



 
</script>




<template>
  <div id="router">
    <RouterLink class="navlink" to="/">На главную</RouterLink>
    <RouterLink class="navlink" to="/about">About</RouterLink>
    <RouterLink class="navlink" to="/TestPage">Test</RouterLink>
  </div>



 <!-- <HelloWorld msg="Vite + Vue" title=""/> -->





<book-list/>


<RouterView></RouterView>


 
  <home-work/>
  <hr>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>


<users-forum/>
<hr>
<br>
<br>



<third-home-task/>
<hr>
<br>
<br>



<progress-bar/>
<hr>
<br>
<br>


<news-list/>
<hr>
<br>
<br>



<!-- <add-file/> -->


    
    <create-random-nums>
      <!-- <h3>Через слот добавили тег</h3> -->
    </create-random-nums>
<hr>
<br>
<br>

<button-hide-show-text/>
<hr>
<br>
<br>


<show-mouse-coordinates/>
<hr>
<br>
<br>





 <BookList/>


    <!-- <AddFile> -->
        <!-- <div>Файл 1</div> -->

    <!-- </AddFile> //! первый способ записи компонента -->
    
    
    <!-- <AddFile/> //! второй способ записи компонента (сокращенный) -->
    <!-- <h-h/> -->

    
    
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
 

</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#router {
  display: flex; 
  margin: 10px; 
  gap: 25px;
}


.navlink:hover {
  background-color: rgb(255, 162, 0, .8)
}

</style>
