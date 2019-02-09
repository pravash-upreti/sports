<template>
  <div class="search-bar-wrapper">
    <input
      v-model.trim="keyword"
      @input="handleSearch"
      type="search"
      class="search-bar"
      placeholder="Search fixtures by teams/players"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
  @Prop() public changeSearchKeyword!: any;

  private keyword: string = '';

  private handleSearch(e: any) {
    e.preventDefault();

    this.changeSearchKeyword(this.keyword);
  }
}
</script>
