<template>
  <header
    class="w-full bg-white flex fixed border border-black-50 shadow-sm top-0 left-0 transition-all ease-in-out duration-500"
    :class="isActive ? 'h-[280px]' : 'h-[80px]'"
  >
    <div
      class="max-w-5xl h-[80px] flex justify-between items-center w-full mx-auto px-4"
    >
      <nuxt-link to="/">
        <h3 class="text-2xl text-zinc-800 tracking-wide">MonstLop.</h3>
      </nuxt-link>
      <NavComponent />
      <div class="md:hidden cursor-pointer" @click="handleClick">
        <HamburgerMenu :isActive="isActive" />
      </div>
      <div v-if="butonActive" class="gap-2 items-center hidden md:flex">
        <nuxt-link to="/signup" class="text-zinc-600 font-semibold">
          Signout
        </nuxt-link>
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <nuxt-link to="/signin"> Signin </nuxt-link>
        </button>
      </div>
      <div v-else>
        <h3 class="text-zinc-800 font-semibold leading-tight">
          {{ user.name }}
        </h3>
      </div>
    </div>
    <NavMobileComponent :isActive="isActive" />
  </header>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      isActive: false,
      butonActive: true,
      user: {},
    }
  },
  computed: {
    token() {
      return this.$store.state.token
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.isActive = false
      }
    })

    if (this.token !== '') {
      this.butonActive = false
      this.user = jwtDecode(this.token)
    }
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive
    },
  },
}
</script>
