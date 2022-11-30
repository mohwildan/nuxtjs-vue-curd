<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-3xl">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="handleSubmit"
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
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Input your Name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            v-model="userName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Input your Username"
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
          <nuxt-link to="signin">
            <h2 class="text-blue-800 underline">sigin</h2>
          </nuxt-link>
        </div>
        <p class="text-center text-red-600">{{ error }}</p>
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
      userName: '',
      name: '',
      error: '',
    }
  },

  methods: {
    async handleSubmit() {
      try {
        await this.$axios.post(
          'https://nest-heroku0.herokuapp.com/auth/signup',
          {
            email: this.email,
            password: this.password,
            name: this.name,
            userName: this.userName,
          }
        )
        this.$router.push('/signin')
      } catch (error) {
        this.error = error.response.data.message
      }
    },
  },
}
</script>
