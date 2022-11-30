<template>
  <div class="mt-24">
    <div v-if="loading" class="relative">
      <LoadingAnimation />
    </div>
    <div class="mx-auto max-w-5xl px-4">
      <InputComponent />
      <PostComponent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    token() {
      return this.$store.state.token
    },
    loading() {
      return this.$store.state.loading
    },
  },
  mounted() {
    if (this.token === '') {
      return this.$router.push('signin')
    }
  },
}
</script>
