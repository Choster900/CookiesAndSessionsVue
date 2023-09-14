<template>
    <h1>Buscar pokemon</h1>
    <form action="" @submit.prevent="onSubmit">
        <input type="number" placeholder="Numero pomemon" autofocus v-model="pokemoId" ref="txtSearchId" />
    </form>
    <br />
    <span>Precione enter</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter();
        const pokemoId = ref(1);
        const txtSearchId = ref();

        onActivated(() => {
            txtSearchId.value.select()
        })
        return {
            pokemoId,
            txtSearchId,
            onSubmit: () => {
                //console.log(pokemoId.value)
                router.push({ name: "pokemon-id", params: { id: pokemoId.value } });
            },
        };
    },
};
</script>

<style></style>
