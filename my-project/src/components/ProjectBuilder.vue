<template>
    <div class="container">
      <h1>Project Builder</h1>
      <element-selector @select="selectElement" />
      <element-editor v-if="selectedElement" :element="selectedElement" />
      <native-code-generator />
    </div>
  </template>
  
  <script>
  import ElementSelector from './ElementSelector.vue'
  import ElementEditor from './ElementEditor.vue'
  import NativeCodeGenerator from './NativeCodeGenerator.vue'
  
  export default {
    components: {
      ElementSelector,
      ElementEditor,
      NativeCodeGenerator,
    },
    data() {
      return {
        selectedElement: null,
      }
    },
    methods: {
      selectElement(element) {
        this.selectedElement = element
      },
    },
  }
  </script>