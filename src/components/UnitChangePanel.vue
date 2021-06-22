<template>
  <div style="text-align: left">
    <div>单位：{{ current['nameZhCn'] }}</div>
    <div v-if="false">HP：{{ changedValue(original['singleHp'], current['singleHp']) }}</div>
    <div>护甲：{{ changedValue(original['armour'], current['armour']) }}</div>
    <div>盾挡：{{ changedValue(original['missileBlockChance'], current['missileBlockChance']) }}</div>
    <div>士气：{{ changedValue(original['morale'], current['morale']) }}</div>
    <div>速度：{{ changedValue(original['speed'], current['speed']) }}</div>
    <div>近攻：{{ changedValue(original['meleeAttack'], current['meleeAttack']) }}</div>
    <div>近防：{{ changedValue(original['meleeDefence'], current['meleeDefence']) }}</div>
    <div>冲锋：{{ changedValue(original['chargeBonus'], current['chargeBonus']) }}</div>
    <template v-if="original['primaryMeleeWeapon']!==current['primaryMeleeWeapon']">
      <div>近战基础杀伤：{{ changedValue(original['meleeDamage'], current['meleeDamage']) }}</div>
      <div>近战破甲杀伤：{{ changedValue(original['meleeApDamage'], current['meleeApDamage']) }}</div>
      <div>近战攻击间隔：{{ changedValue(original['meleeAttackInterval'], current['meleeAttackInterval']) }}</div>
      <div>近战对英雄加成：{{ changedValue(original['bonusVsHeroes'], current['bonusVsHeroes']) }}</div>
    </template>
    <template v-else>
      <div>近战武器数据无变化</div>
    </template>
    <template
        v-if="current['primaryMissileWeapon']!==original['primaryMissileWeapon']
        ||current['missileAttackInterval']!==original['missileAttackInterval']">
      <div>远程基础杀伤：{{ changedValue(original['missileDamage'], current['missileDamage']) }}</div>
      <div>远程破甲杀伤：{{ changedValue(original['missileApDamage'], current['missileApDamage']) }}</div>
      <div>远程攻击间隔：{{ changedValue(original['missileAttackInterval'], current['missileAttackInterval']) }}</div>
      <div>射程：{{ changedValue(original.range, current.range) }}</div>
    </template>
    <template v-else>
      <div>远程武器数据无变化</div>
    </template>
    <div>
      弹药数量：{{ changedValue(original['primaryAmmo'], current['primaryAmmo']) }}
    </div>
    <div v-html="'地形数据效果组：'+changedGround"></div>
    <div v-html="'属性：'+changedAttribute"></div>
  </div>
</template>

<script>
import hero from "../assets/hero-detail-data.json"

export default {
  name: "UnitChangePanel",
  props: {
    providedBodyguardUnit: {
      type: String,
      required: false,
      default() {
        return ""
      }
    }
  },
  data() {
    return {
      heroDetail: hero
    }

  },
  methods: {
    changedValue(original, current) {
      let change = current - original;
      if (change > 0) {
        return '+' + change;
      } else if (change < 0) {
        return change;
      } else {
        return '无变化'
      }
    },
  },
  computed: {
    original() {
      let nameParts = this.providedBodyguardUnit.split('_chariot');
      if (nameParts.length < 2) {
        nameParts = this.providedBodyguardUnit.split('_horse');
      }
      let originalUnit = nameParts[0];
      return this.heroDetail[originalUnit];
    },
    current() {
      return this.heroDetail[this.providedBodyguardUnit];
    },
    changedGround() {
      let oriGroundArr = this.original['groundStatEffectGroup'].split("|");
      let currGroundArr = this.current['groundStatEffectGroup'].split("|");
      let less = [];
      let more = [];
      const _oriGroundSet = new Set(oriGroundArr);
      const _currGroundSet = new Set(currGroundArr);
      const sameArr = [...new Set([..._oriGroundSet].filter(x => _currGroundSet.has(x)))];
      oriGroundArr.map((item) => {
        if (sameArr.indexOf(item) === -1) {
          less.push(item);
        }
      });
      currGroundArr.map((item) => {
        if (sameArr.indexOf(item) === -1) {
          more.push(item);
        }
      });
      let lessStr = less.length > 0 ? "-" + less.join("|") : null;
      let moreStr = more.length > 0 ? "+" + more.join("|") : null;
      if (!lessStr && !moreStr) {
        return '无变化'
      } else if (lessStr && !moreStr) {
        return lessStr;
      } else if (!lessStr && moreStr) {
        return moreStr;
      } else {
        return lessStr + "<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + moreStr
      }
    },
    changedAttribute() {
      let oriAttributeArr = this.original.attributes.split("|");
      let currAttributeArr = this.current.attributes.split("|");
      let less = [];
      let more = [];
      const _oriAttributeSet = new Set(oriAttributeArr);
      const _currAttributeSet = new Set(currAttributeArr);
      const sameArr = [...new Set([..._oriAttributeSet].filter(x => _currAttributeSet.has(x)))];
      oriAttributeArr.map((item) => {
        if (sameArr.indexOf(item) === -1) {
          less.push(item);
        }
      });
      currAttributeArr.map((item) => {
        if (sameArr.indexOf(item) === -1) {
          more.push(item);
        }
      });
      let lessStr = less.length > 0 ? "-" + less.join("|") : null;
      let moreStr = more.length > 0 ? "+" + more.join("|") : null;
      if (!lessStr && !moreStr) {
        return '无变化'
      } else if (lessStr && !moreStr) {
        return lessStr;
      } else if (!lessStr && moreStr) {
        return moreStr;
      } else {
        return lessStr + "<br>&emsp;&emsp;&emsp;" + moreStr
      }
    }
  }
}
</script>

<style scoped>

</style>
