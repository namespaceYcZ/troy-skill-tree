<template>
  <div>
    <div v-for="ability in effectDetail.grantAbilities">
      <div style="text-align: center;white-space: nowrap;">
        {{ abilityDetail[ability]['nameZhCn'] }}
      </div>
      <div v-if="abilityDetail[ability]['dataEffect']" style="text-align: left;white-space: nowrap;">
        数据效果：<span
          v-html="abilityDetail[ability]['dataEffect'].replace(new RegExp('\\|','g'),'<br>&emsp;&emsp;&emsp;&emsp;&emsp;')"/>
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['attributeEffect']">赋予属性：
        <span
            v-html="abilityDetail[ability]['attributeEffect'].replace(new RegExp('\\|','g'),'<br>&emsp;&emsp;&emsp;&emsp;&emsp;')"></span>
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['numUses']>0">限制次数：{{ abilityDetail[ability]['numUses'] }}
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['effectRange']>0">影响范围：{{ abilityDetail[ability]['effectRange'] }}
      </div>
      <div style="text-align: left;white-space: nowrap;">影响目标：<span v-html="joinEffected(abilityDetail[ability])">
      </span>
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['updateTargetsEveryFrame']==='TRUE'">即时更新目标
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['activeTime']>0">持续时间：{{ abilityDetail[ability]['activeTime'] }}
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['rechargeTime']>0">冷却时间：{{ abilityDetail[ability]['rechargeTime'] }}
      </div>
      <div style="text-align: left;white-space: nowrap;" v-html="getTargetDesc(abilityDetail[ability])">
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['invalidUsageFlags']">无效状态：{{
          abilityDetail[ability]['invalidUsageFlags']
        }}
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['invalidTargets']">无效目标：{{
          abilityDetail[ability]['invalidTargets'].replace('[[img:icon_general]][[/img]]', '')
        }}
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['rageCost']>0">消耗怒气：{{
          abilityDetail[ability]['rageCost'] + "（" + abilityDetail[ability]['rageCostType'] + "）"
        }}
      </div>
      <div style="text-align: left;white-space: nowrap;"
           v-if="abilityDetail[ability]['aristeiaPoints']>0">增加辉煌点数：{{
          abilityDetail[ability]['aristeiaPoints']
        }}
      </div>
    </div>
    <div v-for="attribute in effectDetail.grantAttributes">
      <span style="text-align: left;white-space: nowrap;"><br>{{
          attributeInfo[attribute]['description'].replace('[[img:icon_morale]][[/img]]', '')
        }}</span>
      <br>
    </div>
  </div>
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
    joinEffected(ability) {
      let arr = [];
      if (ability['affectSelf'] === 'TRUE') {
        arr.push('自身')
      }
      let friendEffected = this.getFriendEffected(ability['numEffectedFriendlyUnits']);
      if (friendEffected !== '') {
        arr.push(friendEffected)
      }
      let enemyEffected = this.getEnemyEffected(ability['numEffectedEnemyUnits']);
      if (enemyEffected !== '') {
        arr.push(enemyEffected)
      }
      return arr.join('<br>&emsp;&emsp;&emsp;&emsp;&emsp;')
    },
    getFriendEffected(numEffectedFriendlyUnits) {
      console.log("numEffectedFriendlyUnits:" + numEffectedFriendlyUnits)
      if (numEffectedFriendlyUnits === 0) {
        return ''
      } else if (numEffectedFriendlyUnits < 0) {
        return '多个友军单位'
      } else {
        return `${numEffectedFriendlyUnits}个友军单位`
      }
    },
    getEnemyEffected(numEffectedEnemyUnits) {
      console.log("numEffectedEnemyUnits:" + numEffectedEnemyUnits)
      if (numEffectedEnemyUnits === 0) {
        return ''
      } else if (numEffectedEnemyUnits < 0) {
        return '多个敌军单位'
      } else {
        return `${numEffectedEnemyUnits}个敌军单位`
      }
    },
    getTargetDesc(detail) {
      if (detail['passive'] === 'TRUE') {
        return '被动技能'
      }
      let raw = ' ' + (detail['targetSelf'] === 'TRUE' ? '自身' : '')
          + ' ' + (detail['targetFriends'] === 'TRUE' ? '友军' : '')
          + ' ' + (detail['targetEnemies'] === 'TRUE' ? '敌军' : '')
          + ' ' + (detail['targetGround'] === 'TRUE' ? '任意地面' : '')
          + ' ' + (detail['targetGroundUnderAllies'] === 'TRUE' ? '友军下方地面' : '')
          + ' ' + (detail['targetGroundUnderEnemies'] === 'TRUE' ? '敌军下方地面' : '');
      raw = raw.trim();
      if (raw === '' || raw === '自身') {
        return '无需选择施放目标';
      } else {
        return '施放目标：' + raw + '<br>施放距离：' + detail['targetInterceptRange']
      }
    }
  }
}
</script>

<style scoped>

</style>
