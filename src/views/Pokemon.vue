<template>
    <h1 v-if="isLoading">Buscando</h1>

    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" alt="">
        <br>
        <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
    </template>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { watch } from 'vue'
import usePokemon from '@/composables/usePokemon'
export default {
    setup() {
        const route = useRoute()
        const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(route.params.id)

        watch(
            () => route.params.id,
            (value, preValue) => searchPokemon(route.params.id)

        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm("salir")

            if(!answer) return false
        })
        return {
            pokemon, isLoading, errorMessage,
        }
    }
}
</script>

<style></style>