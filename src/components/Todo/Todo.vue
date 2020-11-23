<template>
    <div class="container">

    <div class="todo">
        <h1 class="title">To-Do List</h1>
        <Input @clicked="onClickChild" v-bind:clearInput="clearInput"/>
        <Tasks v-bind:tasks="tasks" @clickedDelete="handleDelete"/>
    </div>
    </div>
</template>

<script>
import './Todo.css'
import Input from '../Input/Input'
import Tasks from '../Tasks/Tasks'
export default {
    name: "Todo",
    data() {
        return {
            tasks : ['NuxtJS', 'Vue', 'React Native']
        }
        
    },
    components: {
        Input,
        Tasks
    },
    methods : {
           onClickChild (value) {
          this.tasks.push(value)
      },
        handleDelete(value) {
            this.tasks = this.tasks.filter(e => e !== value);
        }
    }

}
</script>
