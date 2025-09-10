<script setup lang="ts">
    import { ref } from "vue";

const switcher = ref(true)
// const newText = ref('')
 let width = ref(150)


 const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green; color: orange; '
}


</script>

<template>
    
    <div>Создать html-страницу, на которой будет кнопка и текст. При 
    нажатии на кнопку, текст должен скрываться.</div> <br>
    
    <div v-bind="objectOfAttrs"   id="text" v-if="switcher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et voluptatibus dolorem atque sapiente, nobis expedita officia sequi rem iusto blanditiis, error a quod voluptatem qui accusamus veritatis. A, vero?</div>
    
    <button v-bind:style="'width:' +width +'px'" @click="switcher=!switcher; width+=10">{{ switcher ? 'Скрыть текст' : 'Показать текст' }} </button>

<!-- 
<input type="text" v-model="newText">
<div> {{ newText }} </div> -->

</template>


<style scoped>
    #text {
        background: gray;
        position: absolute;
        z-index: -100;
    }
    button {
        margin-top: 120px;
        min-width: 150px;
        transition: .3s;
    }

    .wrapper {
       color: blue;
    }

</style>
