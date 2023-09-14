<template>
    <h1>Slot</h1>
    <button @click="openModal">Abrir modal</button>
    <ModalVue v-if="isOpen" @on:close="closeModal">
        <h1>Modal</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <button @click="closeModal">Close modal</button>
    </ModalVue>
</template>

<script>
import ModalVue from '@/components/Modal.vue'
import { ref } from 'vue'
export default {
    components: { ModalVue },
    setup() {
        const isOpen = ref(false)
        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
}
</script>

<style></style>