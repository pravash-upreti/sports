<template>
  <span
    class="participant-image-wrapper"
  >
    <img 
      v-if="participant.profileImage && shouldShowImage"
      :src="participant.profileImage"
      :alt="participant.name"
      class="participant-image"
    >
    <span 
      v-else-if="participant.logo" 
      :style="logoStyleObject"
      class="participant-image"
    >{{ participant.logo.text }}</span>
    <span
      v-else
      :style="classObject"
      class="participant-image" 
    >{{ participant.name.substring(0, 1) }}</span>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { getOneRandomColor } from '@/utils/colorHelpers';
import { TeamInterface, PlayerInterface } from '@/interfaces/interfaces';

@Component
export default class ParticipantLogo extends Vue {
  @Prop() private participant!: object;
  @Prop() private customStyles!: object;
  @Prop() private hideImage!: boolean;

  get classObject() {
    return Object.assign(
      {
        backgroundColor: getOneRandomColor()
      },
      this.customStyles
    );
  }

  get logoStyleObject() {
    const participantLogo = (this.participant as TeamInterface).logo;

    if (participantLogo) {
      return Object.assign(
        {
          color: participantLogo.color,
          backgroundColor: participantLogo.backgroundColor
        },
        this.customStyles
      );
    }

    return this.customStyles;
  }

  get shouldShowImage() {
    return !this.hideImage;
  }
}
</script>
