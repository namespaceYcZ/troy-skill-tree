<template>
  <div style="text-align: center; color: chocolate; font-weight: bold">{{ skillDetail.localisedName }}</div>
  <div v-for="e in skillDetail.effects" class="modal">
    <template v-if="!simplify
    ||(e.effectKey!=='troy_effect_hero_level_up_health'
    &&e.effectKey!=='troy_effect_agent_enemy_success_chance_against_this_agent_per_level_HIDDEN')">
      <a :style="getStyleByEffect(effectDetail[e.effectKey])"
         @click="clickEffect(effectDetail[e.effectKey])">
        <span v-html="getDescription(effectDetail[e.effectKey].description, e.value)"></span>
      </a>
      <div class="modal-window"
           v-if="showTooltipByEffect(effectDetail[e.effectKey])">
        <div>
          <aa-panel :effect-detail="effectDetail[e.effectKey]"/>
        </div>
      </div>
    </template>
  </div>
  <div style="text-align: center"
       v-for="a in skillDetail.ancillaries">
    {{ ancillaryDetail[a]['localisedOnscreenName'] }}:{{ ancillaryDetail[a]['localisedColourText'] }}
  </div>
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
      showTooltip: false,
    }
  },
  methods: {
    getDescription(raw, value) {
      if (raw === null || raw.indexOf('%+n') === -1) {// raw = raw + "（" + value + "）"
        raw = raw.trim();
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
        return 'color: black; cursor: default; text-decoration:none;';
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
.modal .modal-window {
  visibility: hidden;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}

.modal:hover .modal-window {
  visibility: visible;
  opacity: 1;
}

.modal-window > div {
  width: auto;
  color: #fff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 1em;
  background: black;
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

</style>
