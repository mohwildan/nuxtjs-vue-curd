<template>
  <form class="flex flex-col" @submit.prevent="handlerSumbmit">
    <textarea
      v-model="text"
      class="border-zinc-500 focus:ring ring-blue-300 focus:outline-none border max-h-32 resize-none"
    />
    <button
      type="submit"
      class="self-start mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      send
    </button>
  </form>
</template>

<script>
import decoded from 'jwt-decode'
export default {
  data() {
    return {
      text: '',
    }
  },
  computed: {
    user() {
      return this.jwtDecoded(this.$store.state.token)
    },
    loading() {
      return this.$store.state.loading
    },
  },
  methods: {
    async handlerSumbmit() {
      this.$store.commit('loading', {
        loading: true,
      })
      await this.$axios.post('/post', {
        email: this.user.email,
        name: this.user.name,
        userName: this.user.userName,
        text: this.text,
        userId: this.user.id,
      })
      await this.$nuxt.refresh()
      this.text = ''
      this.$store.commit('loading', {
        loading: false,
      })
    },

    jwtDecoded(jwt) {
      return decoded(jwt)
    },
  },
}
</script>
