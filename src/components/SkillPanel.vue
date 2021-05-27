<template>
  <span style="text-align: center; color: chocolate; font-weight: bold">{{ skillDetail.localisedName }}</span>
  <span style="text-align: left"
        v-for="e in skillDetail.effects">
    <template v-if="!simplify
    ||(e.effectKey!=='troy_effect_hero_level_up_health'
    &&e.effectKey!=='troy_effect_agent_enemy_success_chance_against_this_agent_per_level_HIDDEN')">
       <br>
    <span :style="getStyleByEffect(effectDetail[e.effectKey])"
          @click="clickEffect(effectDetail[e.effectKey])"
          class="tooltip">
      <span v-html="getDescription(effectDetail[e.effectKey].description, e.value)"></span>
      <span v-if="showTooltipByEffect(effectDetail[e.effectKey])" class="tooltiptext"><aa-panel :effect-detail="effectDetail[e.effectKey]"/></span>
    </span>
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
import AAPanel from "./AAPanel.vue";
export default {
  name: "SkillPanel",
  components: {
    'aa-panel': AAPanel
  },
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
          localisedName: "未找到（显示标题）",
          localisedDescription: "未找到（显示描述）",
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
      showTooltip: false
    }
  },
  methods: {
    getDescription(raw, value) {
      if (raw === null) {
        raw = ''
      } else if (raw.indexOf('%+n') === -1) {
        raw = raw + "（" + value + "）"
      } else {
        raw = raw.replace("%+n", (value > 0 ? '+' : '') + value);
      }
      raw = raw.replace("[[col:green]]", "<span style='color: green'>")
      raw = raw.replace("[[/col]]", "</span>")
      return raw;
    },
    getStyleByEffect(detail) {
      if (detail['grantAbilities'].length > 0 || detail['grantAttributes'].length > 0) {
        return 'color: #2440b3; cursor: pointer; text-decoration:underline;';
      } else {
        return '';
      }
    },
    showTooltipByEffect(detail) {
      return detail['grantAbilities'].length > 0 || detail['grantAttributes'].length > 0;
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
    // console.log("skillDetail:" + JSON.stringify(this.skillDetail));
    // console.log("panel:simplify:" + this.simplify)
  }
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  width: auto;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
