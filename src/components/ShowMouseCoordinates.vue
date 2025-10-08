<script setup lang="ts">
    import { ref } from "vue";

    let coordX = ref()
    let coordY = ref()
    let buttonNumber = ref() as any

function showCoordinates (e:any) {
    coordX.value = e.offsetX
    coordY.value = e.offsetY
}

function showButtons (e:any) {
    buttonNumber = e.button
    
//     if (buttonNumber == 0) {
//         buttonNumber = 'левую'     
//     }  else {
//         buttonNumber = 'правую'        
//     }
}



</script>

<template>
        <div>Создать html-страницу с div, который занимает всю ширину
и высоту экрана. При движении мышкой внутри этого div, выводить текущие координаты мышки. При клике кнопкой мыши туда
же, выводить, какой именно кнопкой был совершен клик (правой
или левой).</div>

<div @mousemove="showCoordinates" @mousedown="showButtons" id="mouseCoordinate"> Коодинаты по оси Х = {{ coordX }} px <br>
Коодинаты по оси Y = {{ coordY }} px<br>
Нажали {{ buttonNumber == 0 ? 'левую' : 'правую' }} кнопку мыши

</div>

</template>


<style scoped>
    #mouseCoordinate {
        width: 300px;
        height: 100px;
        background:  lightgray;
        color: brown;
    }
</style>


<!-- <script setup lang="ts">
    import { ref } from "vue";

</script>

<template>


</template>


<style scoped>

</style> -->