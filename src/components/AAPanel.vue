<template>
  <span>
  <span v-for="ability in effectDetail.grantAbilities">
    <span style="text-align: center;white-space: nowrap;">
      {{ abilityDetail[ability]['nameZhCn'] }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['dataEffect']"><br>数据效果： {{ abilityDetail[ability]['dataEffect'] }}</span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['effectRange']>0"><br>生效范围：{{ abilityDetail[ability]['effectRange'] }}</span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['attributeEffect']"><br>赋予属性：{{
        abilityDetail[ability]['attributeEffect']
      }}</span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['requiresEffectEnabling']==='FALSE'"><br>被动技能
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['numUses']>0"><br>限制次数：{{ abilityDetail[ability]['numUses'] }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['activeTime']>0"><br>有效时间：{{ abilityDetail[ability]['activeTime'] }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['rechargeTime']>0"><br>冷却时间：{{ abilityDetail[ability]['rechargeTime'] }}
    </span>
    <span style="text-align: left;white-space: nowrap;"><br>影响目标：{{
        ' ' + (abilityDetail[ability]['affectSelf'] === 'TRUE' ? '自身' : '')
        + ' ' + getFriendEffected(abilityDetail[ability]['numEffectedFriendlyUnits'])
        + ' ' + getEnemyEffected(abilityDetail[ability]['numEffectedEnemyUnits'])
      }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['updateTargetsEveryFrame']==='TRUE'"><br>即时更新目标
    </span>
    <span style="text-align: left;white-space: nowrap;"><br>施放目标：{{
        ' ' + (abilityDetail[ability]['targetSelf'] === 'TRUE' ? '自身' : '')
        + ' ' + (abilityDetail[ability]['targetFriends'] === 'TRUE' ? '友军' : '')
        + ' ' + (abilityDetail[ability]['targetEnemies'] === 'TRUE' ? '敌军' : '')
        + ' ' + (abilityDetail[ability]['targetGround'] === 'TRUE' ? '任意地面' : '')
        + ' ' + (abilityDetail[ability]['targetGroundUnderAllies'] === 'TRUE' ? '友军下方地面' : '')
        + ' ' + (abilityDetail[ability]['targetGroundUnderEnemies'] === 'TRUE' ? '敌军下方地面' : '')
      }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['targetInterceptRange']>0"><br>施放距离：{{
        abilityDetail[ability]['targetInterceptRange']
      }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['invalidUsageFlags']"><br>无效状态：{{
        abilityDetail[ability]['invalidUsageFlags']
      }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['invalidTargets']"><br>无效目标：{{
        abilityDetail[ability]['invalidTargets']
      }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['rageCost']>0"><br>消耗怒气：{{
        abilityDetail[ability]['rageCost']+"（"+abilityDetail[ability]['rageCostType']+"）"
      }}
    </span>
    <span style="text-align: left;white-space: nowrap;"
          v-if="abilityDetail[ability]['aristeiaPoints']>0"><br>增加辉煌点数：{{
        abilityDetail[ability]['aristeiaPoints']
      }}
    </span>
    <br>
  </span>
  <span v-for="attribute in effectDetail.grantAttributes">
    <span style="text-align: left;white-space: nowrap;"><br>{{ attributeInfo[attribute]['description'] }}</span>
    <br>
  </span>
  </span>
</template>

<script>
import ability from "../assets/ability-detail-data.json"
import attribute from "../assets/attribute-info-data.json"

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

  },
  methods: {
    getFriendEffected(numEffectedFriendlyUnits) {
      console.log("numEffectedFriendlyUnits:" + numEffectedFriendlyUnits)
      if (numEffectedFriendlyUnits === 0) {
        return ''
      } else if (numEffectedFriendlyUnits < 0) {
        return '多个友军单位'
      } else {
        return `${numEffectedFriendlyUnits}多个友军单位`
      }
    },
    getEnemyEffected(numEffectedEnemyUnits) {
      console.log("numEffectedEnemyUnits:" + numEffectedEnemyUnits)
      if (numEffectedEnemyUnits === 0) {
        return ''
      } else if (numEffectedEnemyUnits < 0) {
        return '多个敌军单位'
      } else {
        return `${numEffectedEnemyUnits}多个敌军单位`
      }
    }
  }
}
</script>

<style scoped>

</style>
