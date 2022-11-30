<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-3xl">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="handlerSubmit"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Input your email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <nuxt-link to="signup">
            <h2 class="text-blue-800 underline">signup</h2>
          </nuxt-link>
        </div>
        <p class="text-center text-red-600">{{ error }}</p>
        <div></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',

  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },

  methods: {
    async handlerSubmit() {
      try {
        const res = await this.$axios.post(
          'https://nest-heroku0.herokuapp.com/auth/signin',
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        )
        this.$store.commit({
          type: 'token',
          token: res.data.token,
        })
        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data.message
      }
    },
  },
}
</script>
