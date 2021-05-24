<template>
  <table>
    <tr>
      <td>序号</td>
      <td style="width: 25%">特化技能左</td>
      <td style="text-align: center; width: 25%">初始技能左</td>
      <td style="text-align: center; width: 25%">初始技能右</td>
      <td style="width: 25%">特化技能右</td>
    </tr>
    <tr v-if="skillTree.first">
      <td rowspan="2">1</td>
      <td style="border-bottom: none"></td>
      <td colspan="2" rowspan="2">{{ skillTree.first.zhCnName }}<br>{{ skillTree.first.description }}</td>
      <td style="border-bottom: none"></td>
    </tr>
    <tr v-if="skillTree.first">
      <td style="border-top: none"></td>
      <td style="border-top: none"></td>
    </tr>
    <template v-for="row in skillTree.rows">
      <tr>
        <td rowspan="2">{{ skillTree.first ? row.tier : row.tier - 1 }}</td>
        <td :style="row.leftDown?'border: 1px solid black;':'border: 0'">
          {{ row.leftUp.zhCnName }}<br>{{ row.leftUp.description }}
        </td>
        <td rowspan="2">{{ row.left.zhCnName }}<br>{{ row.left.description }}</td>
        <td rowspan="2">{{ row.right.zhCnName }}<br>{{ row.right.description }}</td>
        <td :style="row.rightDown?'border: 1px solid black;':'border: 0'">
          {{ row.rightUp.zhCnName }}<br>{{ row.rightUp.description }}
        </td>
      </tr>
      <tr>
        <td v-if="row.leftDown">{{ row.leftDown.zhCnName }}<br>{{ row.leftDown.description }}</td>
        <td v-else style="border-top: none"></td>
        <td v-if="row.rightDown">{{ row.rightDown.zhCnName }}<br>{{ row.rightDown.description }}</td>
        <td v-else style="border-top: none"></td>
      </tr>
    </template>
  </table>
</template>

<script>
export default {
  name: "SingleSkillTree",
  props: {
    skillTree: {
      type: Object,
      required: false,
      default() {
        return {
          treeKey: "troy_adi_archer_teucer",
          first: {
            "skillNodeSetKey": "troy_adi_archer_teucer",
            "skillKey": "troy_main_hero_ability_relentless_pursuit",
            "tier": 1,
            "indent": 3,
            "unlockAtRank": 0,
            "enName": "Flights of Artemis",
            "zhCnName": "测试：初始技能",
            "imagePath": "skill_node_icon_relentless_pursuit.png",
            "description": "测试：初始技能描述"
          },
          "rows": [
            {
              "right": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_born_with_the_bow",
                "tier": 2,
                "indent": 3,
                "unlockAtRank": 1,
                "enName": "Centaur Drill",
                "zhCnName": "测试-第二阶技能右",
                "imagePath": "skill_node_icon_born_with_the_bow.png",
                "description": "测试-第二阶技能右描述"
              },
              "rightDown": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_born_with_bow_spec_attack_speed",
                "tier": 2,
                "indent": 2,
                "unlockAtRank": 0,
                "enName": "Centaur Drill (Increased Reload Speed)",
                "zhCnName": "测试-第二阶技能右下",
                "imagePath": "skill_node_icon_generic_attack_interval.png",
                "description": "测试-第二阶技能右下描述"
              },
              "rightUp": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_born_with_bow_spec_battle_speed",
                "tier": 2,
                "indent": 1,
                "unlockAtRank": 0,
                "enName": "Centaur Drill (Speed)",
                "zhCnName": "测试-第二阶技能右上",
                "imagePath": "skill_node_icon_generic_battle_speed.png",
                "description": "测试-第二阶技能右上描述"
              },
              "left": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_cheat_hades",
                "tier": 2,
                "indent": 6,
                "unlockAtRank": 1,
                "enName": "Cheat Hades",
                "zhCnName": "测试-第二阶技能左",
                "imagePath": "skill_icon_feign_death.png",
                "description": "测试-第二阶技能左描述"
              },
              "leftDown": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_cheat_hades_spec_vigour",
                "tier": 2,
                "indent": 5,
                "unlockAtRank": 0,
                "enName": "Cheat Hades (Stamina)",
                "zhCnName": "测试-第二阶技能左下",
                "imagePath": "skill_node_icon_generic_rage.png",
                "description": "测试-第二阶技能左下描述"
              },
              "leftUp": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_cheat_hades_spec_defence",
                "tier": 2,
                "indent": 4,
                "unlockAtRank": 0,
                "enName": "Cheat Hades (Defence)",
                "zhCnName": "测试-第二阶技能左上",
                "imagePath": "skill_node_icon_generic_vigour.png",
                "description": "测试-第二阶技能左上描述"
              }
            }
          ]
        };
      }
    }
  }
}
</script>

<style scoped>
table, table tr th, table tr td {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  text-align: center;
}
</style>
