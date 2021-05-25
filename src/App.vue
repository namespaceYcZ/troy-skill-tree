<template>
  <!--
  <img alt="Vue logo" src="./assets/logo.png"/>
  <hello-world msg="Hello Vue 3 + Vite"/>
  -->
  <select style="text-align: left;margin-left: 5%;" v-model="currentFaction" @change="factionSelected">
    <option value="">请选择派系</option>
    <option v-for="(value,key) in allOptions['factions']" :value="key">{{ value.name }}</option>
  </select>
  <select style="text-align: left;margin-left: 5%;" v-model="currentType" @change="typeSelected">
    <option value="">请选择分类</option>
    <option v-for="(value,key) in allOptions['factions'][currentFaction]['types']" :value="key">
      {{ value.name }}
    </option>
  </select>
  <select style="text-align: left;margin-left: 5%;" v-model="currentTree" @change="treeSelected">
    <option value="">请选择角色</option>
    <option v-for="(value,key) in currentTrees" :value="key">
      {{ value }}
    </option>
  </select>
  <label><input type="checkbox" @click="checkSimplify($event)"/>是否隐藏重复内容</label>
  <div style="margin: 10px;text-align: center">当前技能树：{{ currentTreeName }}</div>
  <single-skill-tree style="width: 90%;margin-left: 5%;margin-right: 5%;margin-bottom: 100px"
                     :skill-tree="allSkillTrees[currentTree]" :simplify="simplify"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SingleSkillTree from "./components/SingleSkillTree.vue";
import skillTrees from "./assets/skill-tree-data.json";
import options from "./assets/options.json";

export default {
  name: 'App',
  components: {
    'hello-world': HelloWorld,
    'single-skill-tree': SingleSkillTree
  },
  data() {
    return {
      currentFaction: "common",
      currentTypes: {},
      currentType: "epic",
      currentTrees: {},
      currentTree: "troy_hero_achilles_skill_set",
      currentTreeName: "阿喀琉斯",
      allSkillTrees: skillTrees,
      allOptions: options,
      simplify: []
    }
  },
  methods: {
    factionSelected() {
      console.log("faction selected:" + this.currentFaction)
      this.currentTypes = this.allOptions['factions'][this.currentFaction]['types'];
      this.currentType = "";
      this.currentTrees = {};
      this.currentTree = "";
    },
    typeSelected() {
      console.log("type selected:" + this.currentType)
      this.currentTrees = this.currentTypes[this.currentType]['trees']
    },
    treeSelected() {
      console.log("tree selected:" + this.currentTree)
      this.currentTreeName = this.currentTrees[this.currentTree]
      console.log("tree selected(name):" + this.currentTreeName)
      // console.log("currentTree:" + JSON.stringify(this.allSkillTrees[this.currentTree]))
    },
    checkSimplify(e) {
      this.simplify = e.target.checked;
    }
  },
  mounted() {
    console.log("start!")
    this.currentFaction = "common";
    this.currentTypes = this.allOptions['factions'][this.currentFaction]['types'];
    this.currentType = "epic";
    this.currentTrees = this.currentTypes[this.currentType]['trees']
  }
}
</script>
<style scoped>

</style>


