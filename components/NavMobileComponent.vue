<template>
  <nav class="hidden self-center">
    <ul
      class="text-zinc-400 transition-all duration-300 text-md hover:text-zinc-600"
      :class="isActive ? 'opacity-100' : 'opacity-0 invisible'"
    >
      <li
        v-for="(item, i) in nav"
        :key="i"
        class="text-zinc-400 transition-all duration-300 text-md hover:text-zinc-600"
      >
        <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
const nav = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Profile',
    href: '/profile',
  },
]
export default {
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      nav,
    }
  },
}
</script>
