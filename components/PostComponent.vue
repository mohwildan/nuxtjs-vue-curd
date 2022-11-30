<template>
  <div class="mt-9">
    <div v-for="item in posts" :key="item.id">
      <div class="mb-4">
        <div class="flex items-center gap-1">
          <h3 class="font-bold text-lg">{{ item.userName }}</h3>
          <h3 class="text-zinc-700 text-lg">{{ item.email }}</h3>
        </div>
        <div>
          <p>{{ item.text }}</p>
        </div>
        <div v-if="item.email === user.email" class="mt-2">
          <button
            class="bg-red-400 hover:bg-red-500 text-white py-1 px-3 rounded-lg"
            @click="handlerDelete(item.id)"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import decoded from 'jwt-decode'
export default {
  data() {
    return {
      posts: [],
    }
  },

  async fetch() {
    const user = await this.$axios.get(
      'https://nest-heroku0.herokuapp.com/post'
    )
    this.posts = user.data.posts
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
    async handlerDelete(id) {
      this.$store.commit('loading', {
        loading: true,
      })
      await this.$axios.delete('https://nest-heroku0.herokuapp.com/post/' + id)
      await this.$nuxt.refresh()
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
