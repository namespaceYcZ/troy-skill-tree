<template>
  <!--
  <img alt="Vue logo" src="./assets/logo.png"/>
  <hello-world msg="Hello Vue 3 + Vite"/>
  -->

  <single-skill-tree style="width: 90%;margin-left: 5%;margin-right: 5%;margin-bottom: 100px"
                     :skill-tree="allSkillTrees['troy_adi_archer_teucer']"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SingleSkillTree from "./components/SingleSkillTree.vue";
import data from "./assets/data.json";

export default {
  name: 'App',
  components: {
    'hello-world': HelloWorld,
    'single-skill-tree': SingleSkillTree
  },
  data() {
    return {
      allSkillTrees: data
    }
  }
}
</script>
<style scoped>

</style>


