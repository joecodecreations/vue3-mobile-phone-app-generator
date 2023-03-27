<template>
    <div class="element-selector">
      <h2>Select Element</h2>
      <select v-model="selected" @change="selectElement">
        <option disabled value="">Choose an element</option>
        <option value="text">Text</option>
        <option value="image">Image</option>
        <option value="button">Button</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selected: '',
      }
    },
    methods: {
      selectElement() {
        this.$emit('select', this.selected)
      },
    },
  }
  </script>