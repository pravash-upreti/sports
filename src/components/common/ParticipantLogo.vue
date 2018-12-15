<template>
  <span
    class="participant-logo-wrapper"
  >
    <img 
      v-if="participant.profileImage && shouldShowImage"
      :src="participant.profileImage"
      :alt="nameFirstLetter"
      :class="imageClassObject"
    >
    <span 
      v-else-if="participant.logo" 
      :style="logoStyleObject"
      :class="imageClassObject"
    >{{ participant.logo.text }}</span>
    <span
      v-else
      :style="classObject"
      :class="imageClassObject" 
    >{{ nameFirstLetter }}</span>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { getOneRandomColor } from '@/utils/colorHelpers';
import { TeamInterface, PlayerInterface } from '@/interfaces/interfaces';

@Component
export default class ParticipantLogo extends Vue {
  @Prop() private participant!: PlayerInterface|TeamInterface;
  @Prop() private customStyles!: object;
  @Prop() private hideImage!: boolean;
  @Prop() private showLarge!: boolean;

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

  get imageClassObject() {
    return {
      'participant-logo': true,
      'participant-logo--large': this.showLarge
    };
  }

  get nameFirstLetter() {
    return this.participant.name.substring(0, 1);
  }
}
</script>
