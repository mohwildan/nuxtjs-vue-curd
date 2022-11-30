<template>
  <nav class="hidden md:block">
    <ul class="flex gap-2">
      <li v-for="(item, i) in nav" :key="i">
        <nuxt-link class="text-zinc-500" :to="item.href">
          {{ item.title }}
        </nuxt-link>
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
  data() {
    return {
      nav,
    }
  },
}
</script>
