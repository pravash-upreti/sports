<template>
  <div class="search-bar-wrapper container">
    <form
      @submit="submitSearch"
      action="#"
      method="GET"
    >
      <input
        v-model.trim="searchKeyword"
        type="text"
        class="search-bar"
        placeholder="Search for fixtures"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
  @Prop() public searchLink!: string;
  private searchKeyword: string = '';

  @Watch('$route', { immediate: true, deep: true })
  public onUrlChange(newVal: any) {
    this.searchKeyword = this.$route.query.keyword;
  }

  private submitSearch(e: any) {
    e.preventDefault();

    const link = `${this.searchLink}/?keyword=${this.searchKeyword}`;

    this.$router.push(link);
  }
}
</script>
