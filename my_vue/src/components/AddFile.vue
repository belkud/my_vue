<script setup lang="ts">
import { ref  } from "vue";


let opacity = ref(0.1) as any

function showButton() {
    opacity.value+=0.1   
    if (opacity.value>=1) {
        opacity.value=0.1
    } 
        console.log(opacity.value);
        
}

</script>

<template>
    <h1 style="color: red;">AddFile</h1>


    <button  @click="showButton() " v-bind:style="'opacity:' +opacity"> Нажми меня</button>
    <button  @click="showButton() " :style="'opacity:' +opacity"> Нажми меня</button>

    <div  class="col" >Инфомация с файла AddFile</div>


<br>
<br>
<br>
<br>
</template>

<style scoped>
    .col {
        color: blue;
    }
</style>