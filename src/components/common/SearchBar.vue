<template>
  <div class="search-bar-wrapper container">
    <input
      v-model.trim="searchKeyword"
      @input="submitSearch"
      type="search"
      class="search-bar"
      :placeholder="searchPlaceHolder"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
  @Prop() public setSearchKeyword!: any;
  @Prop() public placeHolder!: string;
  private searchKeyword: string = '';

  private submitSearch(e: any) {
    e.preventDefault();

    this.setSearchKeyword(this.searchKeyword);
  }

  get searchPlaceHolder(): string {
    return this.placeHolder || 'Search by teams/players';
  }
}
</script>
