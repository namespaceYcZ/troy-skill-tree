<template>
  <table style="border: 2px solid #2c3e50;width: 90%;margin-left: 5%;margin-right: 5%">
    <tr>
      <td style="width: 30%"></td>
      <td style="text-align: center; width: 30%">初始技能</td>
      <td style="width: 30%"></td>
    </tr>
    <tr>
      <td>test left</td>
      <td>test middle</td>
      <td>test right</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SingleSkillTree",
  props: {
    skillTree: Object
  },
}
</script>

<style scoped>

</style>
