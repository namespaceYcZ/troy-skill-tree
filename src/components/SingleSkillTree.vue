<template>
  <table>
    <tr>
      <td>序号</td>
      <td style="width: 25%">特化技能左</td>
      <td style="text-align: center; width: 25%">初始技能左</td>
      <td style="text-align: center; width: 25%">初始技能右</td>
      <td style="width: 25%">特化技能右</td>
    </tr>
    <tr>
      <td rowspan="2">1</td>
      <td style="border-bottom: none"></td>
      <td colspan="2" rowspan="2">{{ skillTree.first.zhCnName }}<br>{{ skillTree.first.description }}</td>
      <td style="border-bottom: none"></td>
    </tr>
    <tr>
      <td style="border-top: none"></td>
      <td style="border-top: none"></td>
    </tr>
    <template v-for="row in skillTree.rows">
      <tr>
        <td rowspan="2">{{row.tier}}</td>
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
            "zhCnName": "阿耳忒弥斯之急速",
            "imagePath": "skill_node_icon_relentless_pursuit.png",
            "description": "“阿耳忒弥斯之急速”能力（1.0）|该英雄生命值+2.5%"
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
                "zhCnName": "半人马训练",
                "imagePath": "skill_node_icon_born_with_the_bow.png",
                "description": "“半人马训练”能力（1.0）|该英雄生命值+2.5%"
              },
              "rightDown": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_born_with_bow_spec_attack_speed",
                "tier": 2,
                "indent": 2,
                "unlockAtRank": 0,
                "enName": "Centaur Drill (Increased Reload Speed)",
                "zhCnName": "半人马训练（提升装填速度）",
                "imagePath": "skill_node_icon_generic_attack_interval.png",
                "description": "替换“半人马训练”能力（1.0）|“半人马训练（提升装填速度）”特化（1.0）|该英雄生命值+2.5%"
              },
              "rightUp": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_born_with_bow_spec_battle_speed",
                "tier": 2,
                "indent": 1,
                "unlockAtRank": 0,
                "enName": "Centaur Drill (Speed)",
                "zhCnName": "半人马训练（移速）",
                "imagePath": "skill_node_icon_generic_battle_speed.png",
                "description": "替换“半人马训练”能力（1.0）|“半人马训练（移速）”特化（1.0）|该英雄生命值+2.5%"
              },
              "left": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_cheat_hades",
                "tier": 2,
                "indent": 6,
                "unlockAtRank": 1,
                "enName": "Cheat Hades",
                "zhCnName": "欺骗哈得斯",
                "imagePath": "skill_icon_feign_death.png",
                "description": "“欺骗哈得斯”能力（1.0）|该英雄生命值+2.5%"
              },
              "leftDown": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_cheat_hades_spec_vigour",
                "tier": 2,
                "indent": 5,
                "unlockAtRank": 0,
                "enName": "Cheat Hades (Stamina)",
                "zhCnName": "欺骗哈得斯（耐力）",
                "imagePath": "skill_node_icon_generic_rage.png",
                "description": "“欺骗哈得斯（耐力）”特化（1.0）|替换“欺骗哈得斯”能力（1.0）|该英雄生命值+2.5%"
              },
              "leftUp": {
                "skillNodeSetKey": "troy_adi_archer_teucer",
                "skillKey": "troy_main_hero_ability_cheat_hades_spec_defence",
                "tier": 2,
                "indent": 4,
                "unlockAtRank": 0,
                "enName": "Cheat Hades (Defence)",
                "zhCnName": "欺骗哈得斯（防御）",
                "imagePath": "skill_node_icon_generic_vigour.png",
                "description": "“欺骗哈得斯（防御）”特化（1.0）|替换“欺骗哈得斯”能力（1.0）|该英雄生命值+2.5%"
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
