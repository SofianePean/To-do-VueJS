<template>
  <div id="app">
    <NavLink />
     <router-view></router-view>
     
  </div>
</template>

<script>
// import Todo from './components/Todo/Todo'
import NavLink from './components/NavLink/NavLink'

export default {
  name: 'App',
  components: {
    // Todo,
    NavLink
  }
}
</script>

<style scoped>

</style>
