<template>
  <span v-for="ability in effectDetail.grantAbilities">
    <span style="text-align: center;white-space: nowrap;">
      {{ abilityDetail[ability]['nameZhCn'] }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['dataEffect']"><br>数据效果： {{ abilityDetail[ability]['dataEffect'] }}</span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['effectRange']>0"><br>生效范围：{{ abilityDetail[ability]['effectRange'] }}</span>
  </span>
</template>

<script>
import ability from "../assets/ability-detail-data.json"
import attribute from "../assets/ability-detail-data.json"

export default {
  name: "AAPanel",
  props: {

    effectDetail: {
      type: Object,
      required: false,
      default() {
        return {
          "effect": "troy_effect_hero_defender_ability_care_for_fallen",
          "icon": "fx_icon_general_ability.png",
          "description": "“阿斯克勒庇俄斯之恩宠”能力",
          "priority": "600",
          "iconNegative": "fx_icon_general_ability.png",
          "category": "battle",
          "isPositiveValueGood": "TRUE",
          "grantAbilities": ["troy_main_hero_defender_ability_care_for_fallen"],
          "grantAttributes": []
        }
      }
    }
  },
  data() {
    return {
      abilityDetail: ability,
      attributeInfo: attribute,
    }

  }
}
</script>

<style scoped>

</style>
