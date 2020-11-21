<template>
    <div class="todo">
        <h1 class="title">To-Do List</h1>
        <Input @clicked="onClickChild"/>
        <Tasks v-bind:tasks="tasks"/>
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
      }
    }

}
</script>
