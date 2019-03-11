<template>
  <div class="registration-info-wrapper">
    <p class="registration-title">Registration Open</p>
    <p class="registration-date">Starting from {{ startDate() }}</p>
  </div>
</template>

<script lang="ts">
import { format as formatDate } from 'date-fns';
import { Vue, Prop, Component } from 'vue-property-decorator';

import { DetailsInterface } from '@/interfaces/interfaces';

@Component
export default class RegistrationInfo extends Vue {
  @Prop() private details!: DetailsInterface;

  public startDate() {
    return formatDate(this.details.startDate, 'ddd, MMMM DD YYYY');
  }
}
</script>
