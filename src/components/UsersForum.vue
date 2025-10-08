<template>
    <h2>Users Forum</h2>

    <div id="users_forum">
        <div>
            <div>{{ user_name }}</div>
            <div>{{  today }}</div>
        </div>
        <hr>        
        <div> {{ user_message }}</div>
    </div>
<br>
<h3>Добавить новое сообщение</h3>

<form action="">
<div>
    <label for="">Имя</label>
    <input v-model.lazy="name" type="text">
</div>
<div> 
    <label for="">Сообщение</label>
    <textarea v-model.lazy="message" name="" id="" cols="50" rows="5"></textarea>
</div>

<input @click.prevent="sendMessage" type="submit" value="Отправить сообщение">
</form>

<div>{{ acc }}</div>

<br>
<br>
<br>
<br>
<form action="">

    <div id="testId">Сюда отправляем {{ addText }}</div>
    <input type="text" v-model.lazy="addText">
    <br>
    <input type="submit" id="testButton" @click.prevent="testFunc">
</form>


</template>




<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, 
    onUpdated, onBeforeUnmount, onUnmounted } from "vue";



// let testId = document.querySelector('testId') as HTMLDivElement
// console.log(testId);

let addText = ref() as any
addText.value = '<div>123</div>'

function testFunc() {
    // console.log('df');
 
    

}





let acc = ref()


onMounted(()=> {
    // console.log('Примонтировано');
})

onBeforeMount(()=> {
    // console.log('До примонтирования');
    // acc.value = 1001
})


onUpdated(()=> {
    // console.log('Изменения в dom дереве');
})

onUnmounted(()=> {
    // console.log('onUnmounted'); // очищает колбэки (для более быстрой работы устройства)
})

onBeforeUnmount(()=> {
    // console.log('onBeforeUnmount');
})

onBeforeUpdate(()=> {
    // console.log('onBeforeUpdate');
})








let name = ref('')
let user_name = ref('')

let message = ref('')
let user_message = ref('')

let date = new Date()
let today = ref('')


function sendMessage () {
    user_name.value = name.value
    name.value = ''

    user_message.value = message.value
    message.value = ''
    
    today.value = date.toLocaleString().split(',').reverse().join(', ') 
    
}










</script>



<style scoped>
#users_forum {
    border: 2px solid white;
}

#users_forum div {
    padding: 10px;
}

#users_forum div:nth-child(1) {
    display: flex;
    justify-content: space-between;
}

form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;
}

form div {
    display: flex;
    flex-direction: column;
}
    

</style>