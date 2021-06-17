<template>
  <div style="text-align: left">
    <div>单位：{{ current.nameZhCn }}</div>
    <div>HP：{{ changedValue(original.singleHp, current.singleHp) }}</div>
    <div>护甲：{{ changedValue(original.armour, current.armour) }}</div>
    <div>盾挡：{{ changedValue(original.missileBlockChance, current.missileBlockChance) }}</div>
    <div>士气：{{ changedValue(original.morale, current.morale) }}</div>
    <div>速度：{{ changedValue(original.speed, current.speed) }}</div>
    <div>近攻：{{ changedValue(original.meleeAttack, current.meleeAttack) }}</div>
    <div>近防：{{ changedValue(original.meleeDefence, current.meleeDefence) }}</div>
    <div>冲锋：{{ changedValue(original.chargeBonus, current.chargeBonus) }}</div>
    <template v-if="original.primaryMeleeWeapon!==current.primaryMeleeWeapon">
      <div>近战基础杀伤：{{ changedValue(original.meleeDamage, current.meleeDamage) }}</div>
      <div>近战破甲杀伤：{{ changedValue(original.meleeApDamage, current.meleeApDamage) }}</div>
      <div>近战攻击间隔：{{ changedValue(original.meleeAttackInterval, current.meleeAttackInterval) }}</div>
      <div>近战对英雄加成：{{ changedValue(original.bonusVsHeroes, current.bonusVsHeroes) }}</div>
    </template>
    <template v-else>
      <div>近战武器数据无变化</div>
    </template>
    <template
        v-if="current.primaryMissileWeapon!==original.primaryMissileWeapon
        ||current.missileAttackInterval!==original.missileAttackInterval">
      <div>远程基础杀伤：{{ changedValue(original.missileDamage, current.missileDamage) }}</div>
      <div>远程破甲杀伤：{{ changedValue(original.missileApDamage, current.missileApDamage) }}</div>
      <div>远程攻击间隔：{{ changedValue(original.missileAttackInterval, current.missileAttackInterval) }}</div>
      <div>射程：{{ changedValue(original.range, current.range) }}</div>
    </template>
    <template v-else>
      <div>远程武器数据无变化</div>
    </template>
    <div>
      弹药数量：{{ changedValue(original.primaryAmmo, current.primaryAmmo) }}
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
      heroDetail: hero,
      original: {
        nameZhCn: '原名称',
        singleHp: 10,
        armour: 25,
        missileBlockChance: 20,
        morale: 50,
        speed: 50,
        meleeAttack: 40,
        meleeDefence: 40,
        chargeBonus: 20,
        primaryMeleeWeapon: 'test melee',
        meleeDamage: 200,
        meleeApDamage: 150,
        meleeAttackInterval: 4.0,
        bonusVsHeroes: 20,
        primaryMissileWeapon: 'test missile',
        missileDamage: 200,
        missileApDamage: 150,
        missileAttackInterval: 4.0,
        primaryAmmo: 30,
        range: 180,
        groundStatEffectGroup: '重装步兵',
        attributes: '攻城者'
      },
      current: {
        nameZhCn: '当前名称',
        singleHp: 20,
        armour: 30,
        missileBlockChance: 40,
        morale: 60,
        speed: 90,
        meleeAttack: 40,
        meleeDefence: 40,
        chargeBonus: 20,
        primaryMeleeWeapon: 'test melee2',
        meleeDamage: 200,
        meleeApDamage: 150,
        meleeAttackInterval: 4.0,
        bonusVsHeroes: 20,
        primaryMissileWeapon: 'test missile 2',
        missileDamage: 200,
        missileApDamage: 150,
        missileAttackInterval: 4.0,
        primaryAmmo: 30,
        range: 180,
        groundStatEffectGroup: '大型部队',
        attributes: '攻城者|心理免疫'
      }
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
    changedGround() {
      let oriGroundArr = this.original.groundStatEffectGroup.split("|");
      let currGroundArr = this.current.groundStatEffectGroup.split("|");
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
  },
  mounted() {
    this.current = this.heroDetail[this.providedBodyguardUnit];
    let nameParts = this.providedBodyguardUnit.split('_chariot');
    if (nameParts.length < 2) {
      nameParts = this.providedBodyguardUnit.split('_horse');
    }
    let originalUnit = nameParts[0];
    this.original = this.heroDetail[originalUnit];
  }
}
</script>

<style scoped>

</style>
