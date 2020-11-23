<template>
    <div class="todo">
        <form class="form" v-on:submit.prevent="handleSubmit">
            <label class="label" for="tasks">Tâche à faire</label>
            <input class="input" v-model="taskInput" type="text" id="tasks">
            <button class="btnForm" type="submit">Créer une tâche</button>
        </form>
    </div>
</template>

<script>
import './Input.css'
export default {
    name: "Input",
    data() {
        return {
            taskInput: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log('Form envoyé')
            this.$emit('clicked', this.taskInput)
            this.taskInput = ''
        }
    }
}
</script>
