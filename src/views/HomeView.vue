<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Reactive vs Ref</h1>
    {{ iroman }}
    {{ hulk }}
  </div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {
    const iroman = ref({ name: 'tony', age: '50' })
    const hulk = ref({ name: 'Bruce', age: '50' })

    return{
      iroman,
      hulk
    }
  }
}
</script>
