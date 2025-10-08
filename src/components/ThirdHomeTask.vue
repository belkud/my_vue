<script setup lang="ts">
import { ref } from "vue";

let acc = ref(50)
let showButton = ref() as any

function showElement (e:any) {
    e.target.style.background = 'red'
    console.log(e.target);
    
}

function showElement2 (e:any) {
    e.target.style.background = ''
}

 

window.addEventListener('scroll', (e:any)=> {
    // if (e.currentTarget.scrollY>200) {
    //     showButton.value=1
    // } else {
    //     showButton.value=0
    // }

    e.currentTarget.scrollY>1000 ? showButton.value=1 : showButton.value=0

})
        
let upPage  =() =>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}
    
function say(message:any) {
  alert(message)
}
</script>


<template>
    <!-- вызвать `vm.submit()` только если `key` клавиши будет `Enter` -->
<input @keyup.enter="'submit'" />
<button @click="say('привет')">Скажи привет</button>
<button @click="say('пока')">Скажи пока</button> 
<button style="position: sticky; top: 100px; left: 199px;" @click="($event)=>console.log($event.offsetY)">Скажи пока 2</button> 

<!-- <button :style="'opacity:' +showButton, 'fontSize :' +1.5 + 'em'" id="moveUp" @click="upPage">Наверх</button> -->
<button  :style="{opacity: showButton, fontSize : '1.5em'}" id="moveUp" @click="upPage">Наверх</button>
    <button @click="acc+=10" >Click me {{ acc.toString().split('').reverse().join('') }}</button>
    <br>
    <br>
    <div @contextmenu.prevent style="width: 500px;">Создать html-страницу с таблицей.
        При наведении мышкой на ячейку таблицы, у этой ячейки
        должен меняться фон. Учтите, что когда мышку уводят с ячейки,
        то ее фон возвращается к прежнему.
        Выполнить задание с помощью JS, а не с помощью CSS.
    
    </div>

<table @mousemove="showElement" @mouseout="showElement2">
    <tr>
        <th>Head1</th>
        <th>Head2</th>
        <th>Head3</th>
        <th>Head4</th>
        <th>Head5</th>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
        <td>Cell3</td>
        <td>Cell4</td>
        <td>Cell5</td>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
        <td>Cell3</td>
        <td>Cell4</td>
        <td>Cell5</td>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
        <td>Cell3</td>
        <td>Cell4</td>
        <td>Cell5</td>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
        <td>Cell3</td>
        <td>Cell4</td>
        <td>Cell5</td>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
        <td>Cell3</td>
        <td>Cell4</td>
        <td>Cell5</td>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
        <td>Cell3</td>
        <td>Cell4</td>
        <td>Cell5</td>
    </tr>
</table>



</template>

<style scoped>

table {
    border: 1px solid gray;
    margin: 25px;
    border-collapse: collapse;
}
table td, table th {
    border: 1px solid gray;
    padding: 5px;
}

table td:hover, table th:hover {
    background: aquamarine;
}

button {
    margin: 25px;
}

#moveUp {
  position: fixed;
  top: 45%;
  right: 0;
}

</style>