<script setup lang="ts"> 
import { ref } from "vue";


const width = ref(0)

const styleObject = ref ({
  color: 'red',
  fontSize: '30px',
  background : 'gray'
})

let col = ref('orange')

const awesome = ref(true)

const users = ([
    {name: 'Dima', age:23},
    {name: 'Petya', age:27},
    {name: 'Vasya', age:30},
])

// for (let i = 0; i < users.length; i++) {
//     console.log(`имя: ${users[i].name}, возраст: ${users[i].age}` )
// }
// for (const el of users) {
//     console.log(el.age);  
// }
</script>



<template >
    <div v-for="user in users">Имя: {{ user.name }}, Возраст: {{ user.age }}</div>

<div v-for="(user, index) in users" >
  {{ index +1 }} : {{ user }}

  <div> {{ user }}</div>


</div>


<span v-for="n in 10">{{ n }}</span>
    
    <button @click="awesome = !awesome; console.log(awesome)">Переключить</button>
    
    <h1 v-show="awesome">Vue восхитителен!</h1>
    <h1 v-show="!awesome">О, нет 😢</h1>
    
    


    <div>Создать html-страницу с progressbar и кнопкой, при нажатии 
на которую заполненность progressbar увеличивается на 5%.</div>

<div id="outer_battery">
    <div id="inner_battery" :style="'width:' +width +'px'"> {{ width }}</div>
</div>


<button @click="width+=10;">Увеличить батарею</button>



<div :style="styleObject">52345345345</div>

<div v-bind:style="'color:' +col" > test</div>

</template>

<style scoped>
    #outer_battery {
        width: 330px;
        height: 45px;
        border: 2px solid aqua;
        margin: 25px;
        border-radius: 5px;
        overflow: hidden;
    }
    
    #inner_battery {
        height: 45px;
        background: greenyellow;
        transition: .3s;
    }
</style>