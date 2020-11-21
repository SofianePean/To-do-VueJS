<template>
    <div>
        <ul>
            <li v-for="task in tasks" :key="task">
                {{task}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Tasks",
    props: ['tasks']
    
}
</script>
