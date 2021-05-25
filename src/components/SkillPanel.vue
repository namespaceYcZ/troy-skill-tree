<template>
  <span style="text-align: center; color: chocolate">{{ skillDetail.localisedName }}</span>
  <span style="text-align: left"
        v-for="e in skillDetail.effects">
    <template v-if="!simplify||e.effectKey!=='troy_effect_hero_level_up_health'">
       <br>
    {{ getDescription(effectDetail[e.effectKey].description, e.value) }}
    </template>

  </span>
</template>

<script>
import effect from "../assets/effect-detail-data.json";

export default {
  name: "SkillPanel",
  props: {
    simplify: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    },
    skillDetail: {
      type: Object,
      required: false,
      default() {
        return {
          key: "troy_main_hero_archer_skirmisher_self_mount_bow",
          imagePath: "skill_node_icon_generic_chariot_bow.png",
          localisedName: "近战战车",
          localisedDescription: "有些人说什么“从远处解决战斗的人根本算不上真正的战士”，他们根本不明白这需要什么样的技巧。",
          preBattleSpeechParameter: null,
          unlockedAtRank: 0,
          isBackgroundSkill: "FALSE",
          isFemaleOnlyBackgroundSkill: "FALSE",
          isMaleOnlyBackgroundSkill: "FALSE",
          backgroundWeighting: 0,
          influenceCost: 0,
          skillColour: "self",
          abilityImagePath: null,
          effects: [{
            characterSkillKey: "troy_main_hero_archer_skirmisher_self_mount_bow",
            level: "1",
            effectKey: "troy_effect_hero_mount_chariot_dummy",
            value: 1.0,
            isFactionwide: "FALSE",
            effectScope: "character_to_character_own"
          }, {
            characterSkillKey: "troy_main_hero_archer_skirmisher_self_mount_bow",
            level: "1",
            effectKey: "troy_effect_hero_level_up_health",
            value: 2.5,
            isFactionwide: "FALSE",
            effectScope: "character_to_character_own"
          }],
          ancillaries: ["troy_main_anc_mount_archer_skirmisher_bow"]
        }
      }
    }
  },
  data() {
    return {
      effectDetail: effect
    }
  },
  methods: {
    getDescription(raw, value) {
      if (raw === null) {
        return ''
      } else if (raw.indexOf('%+n') === -1) {
        return raw + "（" + value + "）"
      } else {
        return raw.replaceAll('%+n', (value > 0 ? '+' : '-') + value);
      }

    }
  },
  mounted() {
    console.log("panel:simplify:" + this.simplify)
  }
}
</script>

<style scoped>

</style>
