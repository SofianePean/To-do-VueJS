<template>
    <div class="tasksContainer">
        <ul class="list">
            <li class="tasks" v-for="task in tasks" :key="task">
                <button class="btnTask" v-on:click="handleDelete(task)">X</button>
                {{task}}
                
            </li>
        </ul>
    </div>
</template>

<script>
import './Tasks.css'
export default {
    name: "Tasks",
    props: ['tasks'],
    methods: {
        handleDelete(task) {
            console.log(`Je click sur la task ${task}`)
            this.$emit('clickedDelete', task)
        }
    }
    
}
</script>
