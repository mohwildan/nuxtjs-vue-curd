<template>
  <div>
    <NavbarComponent />
    <main class="mt-7">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent,
  },
}
</script>
