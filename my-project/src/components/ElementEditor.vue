<template>
    <div class="element-editor">
      <h2>Edit Element</h2>
      <div v-if="element === 'text'">
        <label for="text-content">Text Content:</label>
        <input type="text" id="text-content" v-model="textContent" />
      </div>
      <div v-if="element === 'image'">
        <label for="image-url">Image URL:</label>
        <input type="text" id="image-url" v-model="imageUrl" />
      </div>
      <div v-if="element === 'button'">
        <label for="button-text">Button Text:</label>
        <input type="text" id="button-text" v-model="buttonText" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      element: String,
    },
    data() {
      return {
        textContent: '',
        imageUrl: '',
        buttonText: '',
      }
    },
  }
  </script>