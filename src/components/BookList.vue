<script setup lang="ts">
import { ref } from "vue";

let books = ref([
'Lorem ipsum', 'dolor sit', 'amet consectetur', 'adipisicing elit', 'Consectetur corporis', 'commodi laborum',

])

function clickEl(e:any) {
    const el = e.target
    console.log(e.target);
    // console.log(e.currentTarget);
    
    el.style.background = 'red'
}

function removeEl(e:any) {
    const el = e.target
    el.style.background = ''
}
    // if (e.target) {
    //     el.style.background = 'red'
    //     console.log(1);
        
    // }
    
    // if (!e.target) {
    //     el.style.background = ''
    //     console.log();
    // } 

</script>




<template>
   <h2>BookList</h2>

<div @keydown.once="console.log(2)" @mouseover="clickEl" @mouseout="removeEl" v-for="book in books">{{ book }}</div>



</template>



<style scoped>


</style>