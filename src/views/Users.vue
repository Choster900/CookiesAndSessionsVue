<template>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <user-list-vue 
        :users="users"
            v-slot="{user}"
        >
        <h5>{{ user.first_name }}</h5>
        <span>{{ user.email }}</span>

        </user-list-vue>
    </div>
    <button @click="previousPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import UserListVue from '@/components/UserList.vue'
import useUser from '../composables/useUsers'
export default {
    components: { UserListVue },
    setup() {
        const {
            isLoading,
            users,
            currentPage,
            errorMessage, previousPage, nextPage
        } = useUser()

        return {
            isLoading,
            users,
            currentPage,
            errorMessage,
            previousPage,
            nextPage
        }
    }
}
</script>

<style></style>