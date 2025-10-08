
<script setup lang="ts">

import { ref } from 'vue'

const random = ref()

// console.log(random)
</script>

<template>
    <div>Создать html-страницу для генерации случайных чисел. На
странице должна быть кнопка, при нажатии на которую случайное
целое число от 0 до 100 выводится в div.</div>




<div style="font-size: 2em; height: 50px;"> {{ random }}</div>
<button @click="random = (Math.round(Math.random()*100))">Сгенерировать случайное число</button>




<slot></slot> 
</template>

<style scoped>

</style>