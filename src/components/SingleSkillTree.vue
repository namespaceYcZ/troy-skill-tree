<template>
  <table style="width: 90%;margin-left: 5%;margin-right: 5%">
    <tr>
      <td style="width: 25%">特化技能左</td>
      <td style="text-align: center; width: 25%">初始技能左</td>
      <td style="text-align: center; width: 25%">初始技能右</td>
      <td style="width: 25%">特化技能右</td>
    </tr>
    <tr>
      <td style="border-bottom: none"></td>
      <td colspan="2" rowspan="2">{{ first.zhCnName }}<br>{{ first.description }}</td>
      <td style="border-bottom: none"></td>
    </tr>
    <tr>
      <td style="border-top: none"></td>
      <td style="border-top: none"></td>
    </tr>
    <template v-for="row in rows">
      <tr>
        <td>{{ row.leftUp.zhCnName }}<br>{{ row.leftUp.description }}</td>
        <td rowspan="2">{{ row.left.zhCnName }}<br>{{ row.left.description }}</td>
        <td rowspan="2">{{ row.right.zhCnName }}<br>{{ row.right.description }}</td>
        <td>{{ row.rightUp.zhCnName }}<br>{{ row.rightUp.description }}</td>
      </tr>
      <tr>
        <td v-if="row.leftDown">{{ row.leftDown.zhCnName }}<br>{{ row.leftDown.description }}</td>
        <td v-else></td>
        <td v-if="row.rightDown">{{ row.rightDown.zhCnName }}<br>{{ row.rightDown.description }}</td>
        <td v-else></td>
      </tr>
    </template>
  </table>
</template>

<script>
export default {
  name: "SingleSkillTree",
  props: {
    skillTree: Object
  },
  data() {
    return {
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
      rows: [{
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
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_ammunition",
          "tier": 3,
          "indent": 3,
          "unlockAtRank": 2,
          "enName": null,
          "zhCnName": "阵型专家",
          "imagePath": null,
          "description": "该英雄生命值+2.5%|英雄所在军队远程部队矢石容量+15.0%|英雄所在军队中所有部队远程抗性+4.0%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_ammunition_spec_armour_piercing_missile_resistance_melee",
          "tier": 3,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": null,
          "zhCnName": "阵型专家（护甲）",
          "imagePath": null,
          "description": "该英雄生命值+2.5%|英雄所在军队远程部队破甲伤害+15.0%|英雄所在军队中持盾步兵远程抗性+6.0%"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_ammunition_spec_attack_speed_missile_resistance_ranged",
          "tier": 3,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": null,
          "zhCnName": "阵型专家（攻速）",
          "imagePath": null,
          "description": "该英雄生命值+2.5%|远程部队装填技能+10.0%|英雄所在军队中远程部队远程抗性+8.0%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_vigour_loss_reduction",
          "tier": 3,
          "indent": 6,
          "unlockAtRank": 2,
          "enName": "Ambassador of Hermes",
          "zhCnName": "赫耳墨斯之使",
          "imagePath": "skill_node_icon_generic_fatigue_immune.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中所有部队疲劳减少（-15.0）"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_vigour_loss_reduction_spec_cap",
          "tier": 3,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Ambassador of Hermes (Starting Cap)",
          "zhCnName": "赫耳墨斯之使（初始限制）",
          "imagePath": "skill_node_icon_generic_starting_cap.png",
          "description": "该英雄生命值+2.5%|部队开始战斗时保持“精神饱满”状态（-5.0）"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_vigour_loss_reduction_spec_recovery",
          "tier": 3,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Ambassador of Hermes (Recovery)",
          "zhCnName": "赫耳墨斯之使（恢复）",
          "imagePath": "skill_node_icon_generic_recovery.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中所有部队减少疲劳速度（-15.0）"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_range",
          "tier": 4,
          "indent": 3,
          "unlockAtRank": 3,
          "enName": "The Way of Artemis",
          "zhCnName": "阿耳忒弥斯之道",
          "imagePath": "skill_node_icon_generic_range.png",
          "description": "该英雄生命值+2.5%|英雄矢石+10.0%|英雄射程+8.0%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_range_spec_superrange",
          "tier": 4,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "The Way of Artemis (Range)",
          "zhCnName": "阿耳忒弥斯之道（射程）",
          "imagePath": "skill_node_icon_generic_reload.png",
          "description": "该英雄生命值+2.5%|英雄攻击速度-15.0|英雄射程+10.0%"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_range_spec_ammo",
          "tier": 4,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "The Way of Artemis (Ammunition)",
          "zhCnName": "阿耳忒弥斯之道（矢石）",
          "imagePath": "skill_node_icon_generic_ammo.png",
          "description": "该英雄生命值+2.5%|英雄矢石+20.0%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_speed",
          "tier": 4,
          "indent": 6,
          "unlockAtRank": 3,
          "enName": "The Way of Hermes",
          "zhCnName": "赫耳墨斯之道",
          "imagePath": "skill_node_icon_generic_battle_speed.png",
          "description": "该英雄生命值+2.5%|英雄战斗移速+10.0%"
        },
        "leftDown": null,
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_speed_spec_superspeed",
          "tier": 4,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "The Way of Hermes (Speed)",
          "zhCnName": "赫耳墨斯之道（移速）",
          "imagePath": "skill_node_icon_generic_battle_speed.png",
          "description": "该英雄生命值+2.5%|英雄护甲-5.0|英雄战斗移速+20.0%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_income_raiding_attrition",
          "tier": 5,
          "indent": 3,
          "unlockAtRank": 4,
          "enName": "Disciplinarian",
          "zhCnName": "军纪严明",
          "imagePath": "skill_node_icon_generic_raid.png",
          "description": "英雄所在军队损耗-15.0%|劫掠收入+35.0%|该英雄生命值+2.5%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_income_raiding_attrition_spec_movement_attrition",
          "tier": 5,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Disciplinarian (Campaign Movement & Attrition)",
          "zhCnName": "军纪严明（战役地图移动距离/损耗）",
          "imagePath": "skill_node_icon_generic_campaign_speed.png",
          "description": "英雄所在军队损耗-15.0%|该英雄生命值+2.5%|劫掠不再造成移动距离惩罚（1.0）"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_income_raiding_attrition_spec_replenishment",
          "tier": 5,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Disciplinarian (Replenishment)",
          "zhCnName": "军纪严明（补员）",
          "imagePath": "skill_node_icon_generic_health.png",
          "description": "该英雄生命值+2.5%|劫掠时补员速率+7.0%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_wound_recovery_enemy_agent_resistance",
          "tier": 5,
          "indent": 6,
          "unlockAtRank": 4,
          "enName": "Stalwart",
          "zhCnName": "坚定",
          "imagePath": "skill_node_icon_generic_wound.png",
          "description": "敌方事务官针对该英雄的行动成功率-25.0%|英雄重伤恢复回合数-2.0|该英雄生命值+2.5%"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_wound_recovery_enemy_agent_resistance_spec_general_upkeep",
          "tier": 5,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Stalwart (Upkeep)",
          "zhCnName": "坚定（维护费）",
          "imagePath": "skill_node_icon_generic_battle.png",
          "description": "所有英雄维持费（势力范围）-15.0%|该英雄生命值+2.5%"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_wound_recovery_enemy_agent_resistance_spec_line_of_sight_enemy_agent_resistance",
          "tier": 5,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Stalwart (Line of Sight & Resistance)",
          "zhCnName": "坚定（视野距离/行动抵抗）",
          "imagePath": "skill_node_icon_generic_sight.png",
          "description": "敌方事务官针对该英雄的行动重大失败几率+15.0%|增加英雄所在军队视野距离（100.0）|该英雄生命值+2.5%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_missile_damage",
          "tier": 6,
          "indent": 3,
          "unlockAtRank": 5,
          "enName": "Prayer to Apollo",
          "zhCnName": "阿波罗祷告",
          "imagePath": "skill_node_icon_generic_missile_damage.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中远程部队远程杀伤+10.0%"
        },
        "rightDown": null,
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_missile_damage_spec_ranged_experience_per_turn",
          "tier": 6,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Prayer to Apollo (Experience)",
          "zhCnName": "阿波罗祷告（经验）",
          "imagePath": "skill_node_icon_generic_experience.png",
          "description": "该英雄生命值+2.5%|该英雄麾下远程部队每回合经验值+300.0"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_melee_defence",
          "tier": 6,
          "indent": 6,
          "unlockAtRank": 5,
          "enName": "Prayer to Athena",
          "zhCnName": "雅典娜祷告",
          "imagePath": "skill_node_icon_generic_melee_defence.png",
          "description": "所有部队近战防御+4.0% |该英雄生命值+2.5%"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_melee_defence_spec_siege",
          "tier": 6,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Prayer to Athena (Siege)",
          "zhCnName": "雅典娜祷告（攻城）",
          "imagePath": "skill_node_icon_generic_siege.png",
          "description": "该英雄生命值+2.5%|攻城战中，所有部队近战防御+5.0%"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_melee_defence_spec_sword",
          "tier": 6,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Prayer to Athena (Sword)",
          "zhCnName": "雅典娜祷告（剑士）",
          "imagePath": "skill_node_icon_generic_swordsmen.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中持剑部队近战防御+8.0%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_multiple_shot",
          "tier": 7,
          "indent": 3,
          "unlockAtRank": 6,
          "enName": "Triple Shot",
          "zhCnName": "三连射",
          "imagePath": "skill_icon_multiple_shot.png",
          "description": "“三连射”能力（1.0）|该英雄生命值+2.5%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_multiple_shot_spec_damage_close",
          "tier": 7,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Triple Shot (Damage)",
          "zhCnName": "三连射（伤害）",
          "imagePath": "skill_node_icon_generic_missile_damage.png",
          "description": "替换“三连射”能力（1.0）|“三连射（伤害）”特化（1.0）|该英雄生命值+2.5%"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_multiple_shot_spec_knockback",
          "tier": 7,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Triple Shot (Range)",
          "zhCnName": "三连射（射程）",
          "imagePath": "skill_node_icon_generic_battle.png",
          "description": "替换“三连射”能力（1.0）|“三连射（范围）”特化（1.0）|该英雄生命值+2.5%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_stalk",
          "tier": 7,
          "indent": 6,
          "unlockAtRank": 6,
          "enName": "In Hades' Shadow",
          "zhCnName": "哈得斯之暗影",
          "imagePath": "skill_icon_stalk.png",
          "description": "“哈得斯之暗影”能力（1.0）|该英雄生命值+2.5%"
        },
        "leftDown": null,
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_stalk_spec_unspottable",
          "tier": 7,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "In Hades' Shadow (Unspottable)",
          "zhCnName": "哈得斯之暗影（隐秘）",
          "imagePath": "skill_node_icon_generic_sight.png",
          "description": "替换“哈得斯之暗影”能力（1.0）|“哈得斯之暗影（隐秘）”特化（1.0）|该英雄生命值+2.5%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_ambush_success_defence",
          "tier": 8,
          "indent": 3,
          "unlockAtRank": 7,
          "enName": "Master Ambusher",
          "zhCnName": "伏击大师",
          "imagePath": "skill_node_icon_generic_ambush.png",
          "description": "英雄躲避伏击几率+15.0%|伏击成功率+20.0%|该英雄生命值+2.5%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_ambush_success_defence_spec_attack_charge_movement",
          "tier": 8,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Master Ambusher (Melee & Charge)",
          "zhCnName": "伏击大师（近战/冲锋）",
          "imagePath": "skill_node_icon_generic_charge.png",
          "description": "伏击时部队近战攻击增加+10.0%|伏击时部队冲锋增加+15.0%|该英雄生命值+2.5%"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_ambush_success_defence_spec_morale_hapiness",
          "tier": 8,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Master Ambusher (Morale & Happiness)",
          "zhCnName": "伏击大师（士气/满意度）",
          "imagePath": "skill_node_icon_generic_happines.png",
          "description": "防御时所有部队士气+8.0%|敌方行省满意度降低-5.0|该英雄生命值+2.5%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_agent_recruitment_rank",
          "tier": 8,
          "indent": 6,
          "unlockAtRank": 7,
          "enName": "Alert",
          "zhCnName": "警戒",
          "imagePath": "skill_node_icon_generic_agent.png",
          "description": "事务官征募等级+5.0|该英雄生命值+2.5%"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_agent_recruitment_rank_spec_cost",
          "tier": 8,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Alert (Cost)",
          "zhCnName": "警戒（消耗）",
          "imagePath": "skill_node_icon_generic_recruitment.png",
          "description": "行省内事务官行动成本-15.0%|该英雄生命值+2.5%"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_campaign_agent_recruitment_rank_spec_success_chance",
          "tier": 8,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Alert (Success Chance)",
          "zhCnName": "警戒（成功率）",
          "imagePath": "skill_node_icon_generic_raid.png",
          "description": "行省内己方事务官行动成功率+15.0%|该英雄生命值+2.5%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_range",
          "tier": 9,
          "indent": 3,
          "unlockAtRank": 8,
          "enName": "Follower of Artemis",
          "zhCnName": "阿耳忒弥斯信众",
          "imagePath": "skill_node_icon_generic_range.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中远程部队射程+6.0%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_range_spec_archers",
          "tier": 9,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Follower of Artemis (Bow)",
          "zhCnName": "阿耳忒弥斯信众（弓箭）",
          "imagePath": "skill_node_icon_generic_archer.png",
          "description": "该英雄生命值+2.5%|弓箭手部队射程+7.0%"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_range_spec_javelins",
          "tier": 9,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Follower of Artemis (Javelin)",
          "zhCnName": "阿耳忒弥斯信众（标枪）",
          "imagePath": "skill_node_icon_generic_javelin.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中标枪手部队射程+10.0%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_melee_attack",
          "tier": 9,
          "indent": 6,
          "unlockAtRank": 8,
          "enName": "Prayer to Ares",
          "zhCnName": "阿瑞斯祷告",
          "imagePath": "skill_node_icon_generic_melee_attack.png",
          "description": "所有部队近战攻击+5.0%|该英雄生命值+2.5%"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_melee_attack_spec_siege",
          "tier": 9,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Prayer to Ares (Siege)",
          "zhCnName": "阿瑞斯祷告（攻城）",
          "imagePath": "skill_node_icon_generic_siege.png",
          "description": "该英雄生命值+2.5%|攻城战中，所有部队近战攻击+5.0%"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_melee_attack_spec_sword",
          "tier": 9,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Prayer to Ares (Sword)",
          "zhCnName": "阿瑞斯祷告（剑士）",
          "imagePath": "skill_node_icon_generic_swordsmen.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中持剑部队近战攻击+10.0%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_vanguard",
          "tier": 10,
          "indent": 3,
          "unlockAtRank": 9,
          "enName": "Heir of Dolos",
          "zhCnName": "德卢斯之裔",
          "imagePath": "skill_node_icon_generic_vanguard.png",
          "description": "该英雄生命值+2.5%|英雄获得先锋部署（1.0）"
        },
        "rightDown": null,
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_vanguard_spec_stalk",
          "tier": 10,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Heir of Dolos (Stalk)",
          "zhCnName": "德卢斯之裔（潜行）",
          "imagePath": "skill_node_icon_stalk.png",
          "description": "该英雄生命值+2.5%|英雄获得“潜行”特化（1.0）"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_missile_armour_piercing",
          "tier": 10,
          "indent": 6,
          "unlockAtRank": 9,
          "enName": "Heavy Bow",
          "zhCnName": "重型弓矢",
          "imagePath": "skill_node_icon_generic_armour_piercing_ranged.png",
          "description": "该英雄生命值+2.5%|英雄远程破甲杀伤+20.0%"
        },
        "leftDown": null,
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_missile_armour_piercing_spec_strength",
          "tier": 10,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Heavy Bow (Damage & Reload Speed)",
          "zhCnName": "重型弓矢（伤害及装填）",
          "imagePath": "skill_node_icon_generic_armour_piercing_ranged.png",
          "description": "该英雄生命值+2.5%|英雄远程破甲杀伤+20.0%|英雄装填技能-5.0%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_vanguard",
          "tier": 11,
          "indent": 3,
          "unlockAtRank": 10,
          "enName": "Covered by Hades",
          "zhCnName": "哈得斯之蔽",
          "imagePath": "skill_node_icon_generic_vanguard.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中所有轻装远程步兵获得先锋部署（1.0）"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_vanguard_spec_light_infantry",
          "tier": 11,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Covered by Hades (Javelin)",
          "zhCnName": "哈得斯之蔽（标枪）",
          "imagePath": "skill_node_icon_generic_vanguard.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中所有轻装步兵获得先锋部署（1.0）"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_vanguard_spec_speed_missile",
          "tier": 11,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Covered by Hades (Battle Speed)",
          "zhCnName": "哈得斯之蔽（战斗移速）",
          "imagePath": "skill_node_icon_generic_battle_speed.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中远程部队战斗移速+10.0%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_speed",
          "tier": 11,
          "indent": 6,
          "unlockAtRank": 10,
          "enName": "Chosen of Hermes",
          "zhCnName": "赫耳墨斯之选",
          "imagePath": "skill_node_icon_generic_battle_speed.png",
          "description": "该英雄生命值+2.5%|英雄所在军队中所有部队战斗移速+6.0%"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_speed_spec_land",
          "tier": 11,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Chosen of Hermes (Land)",
          "zhCnName": "赫耳墨斯之选（陆战）",
          "imagePath": "skill_node_icon_generic_land.png",
          "description": "该英雄生命值+2.5%|军队在陆地战中战斗移速+8.0%"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_unit_speed_spec_siege",
          "tier": 11,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Chosen of Hermes (Siege)",
          "zhCnName": "赫耳墨斯之选（攻城）",
          "imagePath": "skill_node_icon_generic_swordsmen.png",
          "description": "该英雄生命值+2.5%|军队在攻城战中战斗移速+8.0%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_strafe",
          "tier": 12,
          "indent": 3,
          "unlockAtRank": 11,
          "enName": "Strafe",
          "zhCnName": "猛轰",
          "imagePath": "skill_node_icon_strafe.png",
          "description": "“猛轰”能力（1.0）|该英雄生命值+2.5%"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_strafe_spec_damage",
          "tier": 12,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Strafe (Damage)",
          "zhCnName": "猛轰（伤害）",
          "imagePath": "skill_node_icon_generic_missile_damage.png",
          "description": "替换“猛轰”能力（1.0）|“猛轰（伤害）”特化（1.0）|该英雄生命值+2.5%"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_strafe_spec_speed",
          "tier": 12,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Strafe (Speed)",
          "zhCnName": "猛轰（移速）",
          "imagePath": "skill_node_icon_generic_battle_speed.png",
          "description": "替换“猛轰”能力（1.0）|“猛轰（移速）”特化（1.0）|该英雄生命值+2.5%"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_inspired_shots",
          "tier": 12,
          "indent": 6,
          "unlockAtRank": 11,
          "enName": "Inspired Aim",
          "zhCnName": "鼓舞瞄准",
          "imagePath": "skill_icon_inspired_shots.png",
          "description": "“鼓舞瞄准”能力（1.0）|该英雄生命值+2.5%"
        },
        "leftDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_inspired_shots_spec_cost",
          "tier": 12,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Inspired Aim (Cost)",
          "zhCnName": "鼓舞瞄准（消耗）",
          "imagePath": "skill_node_icon_generic_rage.png",
          "description": "替换“鼓舞瞄准”能力（1.0）|“鼓舞瞄准（消耗）”特化（1.0）|该英雄生命值+2.5%"
        },
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_ability_inspired_shots_spec_damage",
          "tier": 12,
          "indent": 4,
          "unlockAtRank": 0,
          "enName": "Inspired Aim (Damage)",
          "zhCnName": "鼓舞瞄准（伤害）",
          "imagePath": "skill_node_icon_generic_missile_damage.png",
          "description": "替换“鼓舞瞄准”能力（1.0）|“鼓舞瞄准（伤害）”特化（1.0）|该英雄生命值+2.5%"
        }
      }, {
        "right": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_archer_trickster_self_mount_bow",
          "tier": 13,
          "indent": 3,
          "unlockAtRank": 12,
          "enName": "Archer Chariot",
          "zhCnName": "射手战车",
          "imagePath": "skill_node_icon_generic_chariot_bow.png",
          "description": "该英雄生命值+2.5%|该英雄将获得一辆战车（1.0）"
        },
        "rightDown": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_archer_trickster_self_mount_bow_spec_sharpshooter",
          "tier": 13,
          "indent": 2,
          "unlockAtRank": 0,
          "enName": "Light Archer Chariot",
          "zhCnName": "轻型射手战车",
          "imagePath": "skill_node_icon_generic_range.png",
          "description": "该英雄生命值+2.5%|该英雄将获得一辆战车（1.0）"
        },
        "rightUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_archer_trickster_self_mount_bow_spec_support",
          "tier": 13,
          "indent": 1,
          "unlockAtRank": 0,
          "enName": "Large Archer Chariot",
          "zhCnName": "大型射手战车",
          "imagePath": "skill_node_icon_generic_ammo.png",
          "description": "该英雄生命值+2.5%|该英雄将获得一辆战车（1.0）"
        },
        "left": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_cooldown",
          "tier": 13,
          "indent": 6,
          "unlockAtRank": 12,
          "enName": "Combat Mastery",
          "zhCnName": "战斗大师",
          "imagePath": "skill_node_icon_generic_cooldown.png",
          "description": "该英雄生命值+2.5%|主动能力冷却时间-15.0%"
        },
        "leftDown": null,
        "leftUp": {
          "skillNodeSetKey": "troy_adi_archer_teucer",
          "skillKey": "troy_main_hero_self_cooldown_spec_cost",
          "tier": 13,
          "indent": 5,
          "unlockAtRank": 0,
          "enName": "Combat Mastery (Rage)",
          "zhCnName": "战斗大师（愤怒）",
          "imagePath": "skill_node_icon_generic_cooldown.png",
          "description": "该英雄生命值+2.5%|主动能力怒气消耗-20.0%"
        }
      }]
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
table, table tr th, table tr td {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
}
</style>
