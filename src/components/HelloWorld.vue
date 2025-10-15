<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string, title?: string }>()

const count = ref('')

const multNumber = ref (5 * 3)
console.log(multNumber);

const bool = ref(false)
// const count2 = ref(0)

// let count = document.querySelector('#count') as htmlDivElement
// count.addEventListener ('click', ()=> {
//   count++
// })

// function addNumber() {
//   count.value++
//   console.log(count.value);
// }

 
const addNumber2 = ()=> {
  count.value+= '!'
  console.log(count.value);

}


const users = [
  {name: 'Ivan', age: 23, city : 'Sochi'},
  {name: 'Pasha', age: 28, city : 'Moscow'},
  {name: 'Sasha', age: 21, city : 'Peterburf'},
]

console.log(...users);


</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- мы можем складывать числа внутри -->
  <h1>{{ 10 + 12 }}</h1>

  <!-- <input type="text" v-model=""> -->
<div></div>


<!--! работа с циклама -->
<div v-for="user in users">{{user.name}} = {{ user.city }}</div>

  <div class="card">
    <!-- <button v-if="bool=!bool" type="button" @click="addNumber2">count is {{ count }}</button> -->
    <!-- <button v-else type="button" @click="addNumber2">count 123 is {{ count }}</button> -->
    <!-- <button v-else type="button" @click="addNumber2">count is {{ count }}</button> -->
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
/* div {
  background: green;
} */
</style>
