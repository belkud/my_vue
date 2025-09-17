<script setup lang="ts">

// import AddFile from "./components/AddFile.vue";
// import HelloWorld from './components/HelloWorld.vue'
import CreateRandomNums from "./components/CreateRandomNums.vue";
import ShowMouseCoordinates from "./components/ShowMouseCoordinates.vue";
import ButtonHideShowText from "./components/ButtonHideShowText.vue";
import ProgressBar from "./components/ProgressBar.vue";
import NewsList from "./components/NewsList.vue";
import ThirdHomeTask from "./components/ThirdHomeTask.vue";



</script>




<template>



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
  <!-- <HelloWorld msg="Vite + Vue" /> -->

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


</style>
