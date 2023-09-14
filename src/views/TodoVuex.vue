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
    <button @click="openModal">Crear todo</button>

    <ModalVue v-if="isOpen" @on:close="closeModal">
        <h1>Crear tarea</h1>
        <input type="text" v-model="textTodo">
        <button @click="crearTodoMethod">Crear todo</button>
        <button @click="closeModal">Close modal</button>
    </ModalVue>
</template>

<script>
import useTodos from '@/composables/useTodos';
import ModalVue from '@/components/Modal.vue';
import { ref } from 'vue';
import { useStore } from "vuex";
export default {
    components: { ModalVue },
    setup() {
        const {
            currentTab,
            pending,
            completed,
            allTodos,
            getTodosByTab,
            toggleTodo,
        } = useTodos()
        const store = useStore()
        const textTodo = ref(null)
        const isOpen = ref(false)
        const crearTodoMethod = () => {
            store.commit("crearteTodo", textTodo)
        }
        return {
            textTodo,
            currentTab,
            pending,
            completed,
            allTodos,
            getTodosByTab,
            toggleTodo,

            isOpen,
            crearTodoMethod,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
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