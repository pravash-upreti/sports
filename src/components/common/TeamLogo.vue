<template>
  <span 
    :key="'participant-image-{{ participant.id }}'" 
    class="participant-image-wrapper"
  >
    <img 
      v-if="participant.image"
      :src="participant.image"
      :alt="participant.name"
      class="participant-image"
    >
    <span 
      v-else-if="participant.logo" 
      :style="logoStyleObject"
      class="participant-image" 
    >
      {{ participant.logo.text }}
    </span>
    <span
      v-else
      :style="classObject"
      class="participant-image" 
    >
      {{ participant.name.substring(0, 1) }}
    </span>
  </span>
</template>

<script>
import { getOneRandomColor } from '../../utils/colorHelpers';

export default {
  name: 'TeamLogo',
  props: {
    participant: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    },
    customStyles: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    classObject: function() {
      return Object.assign(
        {
          backgroundColor: getOneRandomColor()
        },
        this.customStyles
      );
    },

    logoStyleObject: function() {
      return Object.assign(
        {
          color: this.participant.logo.color,
          backgroundColor: this.participant.logo.backgroundColor
        },
        this.customStyles
      );
    }
  }
};
</script>
