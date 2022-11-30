<template>
  <input
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :type="type"
    :placeholder="placeholder"
    :value="textValue"
    @input="$emit('update:texValue', '$event.target.value')"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    textValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:texValue'],
}
</script>
