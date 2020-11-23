<template>
<div class="home">
    Premier pas avec VueJS !
</div>
</template>
<script>
import './Home.css'
import Routes from '../../Routes'
export default {
    name: 'Home',
    data() {
        return {
            routes: Routes
        }
    }
}
</script>
