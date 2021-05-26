<template>
  <span style="text-align: center; color: chocolate">{{ skillDetail.localisedName }}</span>
  <span style="text-align: left"
        v-for="e in skillDetail.effects">
    <template v-if="!simplify
    ||(e.effectKey!=='troy_effect_hero_level_up_health'
    &&e.effectKey!=='troy_effect_agent_enemy_success_chance_against_this_agent_per_level_HIDDEN')">
       <br>
    <span v-html="getDescription(effectDetail[e.effectKey].description, e.value)"
          :style="getStyleByEffect(effectDetail[e.effectKey])"
          @click="clickEffect(effectDetail[e.effectKey])"></span>
    </template>
  </span>
  <span style="text-align: left"
        v-for="a in skillDetail.ancillaries">
       <br>
    {{ ancillaryDetail[a]['localisedOnscreenName'] }}:{{ ancillaryDetail[a]['localisedColourText'] }}
  </span>
</template>

<script>
import effect from "../assets/effect-detail-data.json";
import ancillary from "../assets/ancillary-detail-data.json";

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
      effectDetail: effect,
      ancillaryDetail: ancillary,
    }
  },
  methods: {
    getDescription(raw, value) {
      if (raw === null) {
        raw = ''
      } else if (raw.indexOf('%+n') === -1) {
        raw = raw + "（" + value + "）"
      } else {
        raw = raw.replaceAll('%+n', (value > 0 ? '+' : '') + value);
      }
      raw = raw.replaceAll("[[col:green]]", "<span style='color: red'>")
      raw = raw.replaceAll("[[/col]]", "</span>")
      return raw;
    },
    getStyleByEffect(detail) {
      if (detail['grantAbilities'].length > 0 || detail['grantAttributes'].length > 0) {
        return 'color: #2440b3; cursor: pointer; text-decoration:underline;';
      } else {
        return '';
      }
    },
    clickEffect(detail) {
      if (detail['grantAbilities'].length > 0 || detail['grantAttributes'].length > 0) {
        console.log("click:" + JSON.stringify(detail))
      } else {
        return console.log("nothing");
      }

    }
  },
  mounted() {
    // console.log("panel:simplify:" + this.simplify)
  }
}
</script>

<style scoped>

</style>
