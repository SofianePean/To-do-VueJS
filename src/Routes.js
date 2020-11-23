import Todo from './components/Todo/Todo.vue'
import Home from './components/Home/Home.vue'
import Weather from './components/Weather/Weather'

export default [
    {path: '/', name: 'Home', component: Home},
    {path: '/todo', name: 'Todo', component: Todo},
    {path: '/meteo',name: 'Weather', component: Weather},
]