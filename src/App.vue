<template>
  <!-- the original content -->
  <!--
  <img alt="Vue logo" src="./assets/logo.png" />
  -->
  <hello-world msg="Hello Vue 3.0 + Vite"/>
  <single-skill-tree></single-skill-tree>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SingleSkillTree from "./components/SingleSkillTree.vue";

export default {
  name: 'App',
  components: {
    'hello-world': HelloWorld,
    'single-skill-tree': SingleSkillTree
  }
}
</script>
