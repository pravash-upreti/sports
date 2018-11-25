<template>
  <div class="categories-filter-wrapper">
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="index"
        :class="activeClassObject(category)"
        @click="handleChangeSelectedCategory(category)"
      >
        {{ category.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { CategoryInterface } from '@/interfaces/interfaces';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class CategoriesFilter extends Vue {
  @Prop() public categories!: CategoryInterface[];
  @Prop() public selectedCategory!: CategoryInterface;
  @Prop() public changeSelectedCategory!: any;

  private handleChangeSelectedCategory(category: CategoryInterface) {
    this.changeSelectedCategory(category);
  }

  private activeClassObject(category: CategoryInterface) {
    return {
      active: category.id === this.selectedCategory.id
    };
  }
}
</script>
