<template>
  <footer>
    <p>&copy; {{ getYear }}, Leapfrog Technology. All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
import * as dateFns from 'date-fns';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  get getYear() {
    return dateFns.getYear(new Date());
  }
}
</script>
