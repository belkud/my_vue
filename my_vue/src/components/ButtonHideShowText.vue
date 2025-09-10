<script setup lang="ts">
    import { ref } from "vue";

const switcher = ref(true)
 

</script>

<template>
    
    <div>Создать html-страницу, на которой будет кнопка и текст. При 
    нажатии на кнопку, текст должен скрываться.</div> <br>
    
    <div id="text" v-if="switcher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et voluptatibus dolorem atque sapiente, nobis expedita officia sequi rem iusto blanditiis, error a quod voluptatem qui accusamus veritatis. A, vero?</div>
    
    <button @:click="switcher=!switcher;">{{ switcher ? 'Скрыть текст' : 'Показать текст' }} </button>

</template>


<style scoped>
    #text {
        background: gray;
        position: absolute;
        z-index: -100;
    }
    button {
        margin-top: 120px;
    }

</style>
