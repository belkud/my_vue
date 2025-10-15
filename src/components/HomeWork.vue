
<script setup lang="ts">
import { ref  } from "vue";

// задание 1
function enterName (e:any) {
    if (e.key>='0' && e.key<='9') {
        e.preventDefault()
    }
    console.log(e.key);
    console.log(e.code);
    
}


// задание 2
let switcher = ref(false)


// задание 3

let title = ref('') as any

window.addEventListener('mousemove', (e:any)=> {
    title.value = e.clientY
    // console.log(e.clientY);  
    // console.log(e.offsetY);  
    // console.log(e);  
})


</script>

<template>
<h3>Задание 6
Создать html-страницу с несколькими кнопками.
При наведении на кнопку, должна появляться подсказка с текстом. По умолчанию – подсказка появляется сверху от кнопки. Но
если она не помещается сверху от кнопки, тогда отображается снизу.</h3>


<div style="margin-bottom: 20px; margin-left: 40px;">
    <div v-if="title>300" id="tip">Подсказка</div>
    <div id="tipTail"></div>
</div>
<button >Кнопка с подсказкой</button>

<br>
<br>
<br>
<br>

<h3>Задание 2
Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает. </h3>

<button @click="switcher=true">Открыть окно</button>
<br>
<br>
<div v-show="switcher" style="background: gray; height: 100px; width: 300px;">
    <div @click="switcher=false" id="cross">X</div>
</div>

 <h3>Задание 1.
Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.</h3>

<input @keydown="enterName" type="text">
<hr>
<br>
<br>




</template>

<style scoped>
 #cross {
    color: black;
    font-weight: 900;
    margin-left: 92%;
    cursor: pointer;
}

#cross:hover {
     background: red;
 }

 #tip {
    background: purple;
    width: 100px;
    text-align: center;
    padding: 5px;
    font-size: 1.2em;
 }

#tipTail {
    height: 16px;
    width: 16px;
    rotate: 45deg;
    position: absolute;
    left: 85px;
    margin-top: -8px;
    background: purple;
}

</style>

