<template>
    <h1>Todo List</h1>
    <h4>PENDIENTE: {{ pending.length }}</h4>

    <button @click="currentTab = 'all'" :class="{ 'active': currentTab == 'all' }">Todos</button>
    <button @click="currentTab = 'pending'" :class="{ 'active': currentTab == 'pending' }">Pendientes</button>
    <button @click="currentTab = 'completed'" :class="{ 'active': currentTab == 'completed' }">Completados</button>

    <div>
        <ul>
            <li class="cursor-pointer" v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {

    setup() {
        const store = useStore()

        const currentTab = ref('all')

        return {
            currentTab,
            pending: computed(() => store.getters['pendingTodos']),
            completed: computed(() => store.getters['completedTodos']),
            allTodos: computed(() => store.getters['allTodos']),
            getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
            toggleTodo: ( id ) => store.commit("toggleTodo", id),
        }
    }
}
</script>

<style scoped>
/* div {
    display: flex;
    justify-content: center;
    text-align: center;
} */

.active {
    background-color: red;
    color: white !important;
}

.completed {
    text-decoration: line-through;
}
</style>