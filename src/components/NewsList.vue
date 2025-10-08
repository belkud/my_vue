<script setup lang="ts">
import { ref } from 'vue'

let bool = ref(true)

function showEl (e:any) {
    if (e.target.type == 'submit') {
        const el = e.currentTarget
        el.style.display = 'none'

    }
}

let acc = ref (0)

let showButton  = (e:any) => {
    // acc.value++
    // console.log(acc.value);
    
}

</script>

<template>
    <div>Создать html-страницу со списком новостей. Возле каждой 
новости должна быть кнопка Удалить, при нажатии на которую 
соответствующая новость исчезает</div>

<div id="container">
    <div @click="showEl">
        <div style="display: flex; justify-content: space-between">
            <h3>Lorem ipsum dolor sit amet 1</h3>
            <button>X [remove]</button>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis sapiente animi nisi eius, quibusdam possimus quia explicabo quisquam eum optio illum? Fugiat sint consequuntur corporis libero excepturi similique sapiente.</div>
    </div>

    <div @click="showEl">
        <div style="display: flex; justify-content: space-between">
            <h3>Lorem ipsum dolor sit amet 2</h3>
            <button>X [remove]</button>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis sapiente animi nisi eius, quibusdam possimus quia explicabo quisquam eum optio illum? Fugiat sint consequuntur corporis libero excepturi similique sapiente.</div>
    </div>

    <div @click="showEl">
        <div style="display: flex; justify-content: space-between">
            <h3>Lorem ipsum dolor sit amet 3</h3>
            <button>X [remove]</button>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis sapiente animi nisi eius, quibusdam possimus quia explicabo quisquam eum optio illum? Fugiat sint consequuntur corporis libero excepturi similique sapiente.</div>
    </div>
    

    
</div>

<input @keydown="acc++; console.log(acc)">test</input>




</template>


<style scoped>
button {
    background-color: rgb(22, 50, 211);
    padding: 5px;
    height: 32px;
}
#container {
    padding: 30px;
}

#container button {
    margin-top: 20px;
}

#container>div {
    border: 1px solid aqua;
    margin-top: 15px;
    padding: 10px;
}
</style>