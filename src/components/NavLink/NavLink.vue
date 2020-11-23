<template>
<div class="links">
    <router-link v-for="route in routes" :key="route.name" tag="a" class="link" class-active="active" v-bind:to="route.path" exact>{{ route.name }}</router-link>
</div>
</template>
<script>
import './NavLink.css'
import Routes from '../../Routes'
export default {
    name: 'NavLink',
    data() {
        return {
            routes: Routes
        }
    }
}
</script>