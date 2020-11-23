<template>
    <div class="tasksContainer">
        <ul class="list">
            <li class="tasks" v-for="task in tasks" :key="task">
                <font-awesome-icon icon="trash-alt" class="btnDeleteTask" v-on:click="handleDelete(task)"/>
                <font-awesome-icon icon="edit" class="btnEditTask" v-on:click="handleDelete(task)"/>
                {{task}}
                
            </li>
        </ul>
    </div>
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faTrashAlt)
import './Tasks.css'
export default {
    name: "Tasks",
    props: ['tasks'],
    methods: {
        handleDelete(task) {
            this.$emit('clickedDelete', task)
        }
    }
    
}
</script>
