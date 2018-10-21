<template>
  <header>
    <div class="logo-wrapper">
      <img 
        :src="logo" 
        class="logo" 
        alt="sports" 
      >
      <div class="logo-title">{{ pageTitle }}</div>
    </div>
    <ul class="nav nav--primary">
      <li>
        <router-link 
          :to="baseRoutes.FUTSAL"
          active-class="active"
        >
          <i class="fa fa-futbol" />
          <span class="nav__link-text">FUTSAL</span>
        </router-link>
      </li>
      <li>
        <router-link 
          :to="baseRoutes.CHESS"
          active-class="active"
        >
          <i class="fa fa-chess" />
          <span class="nav__link-text">CHESS</span>
        </router-link>
      </li>
      <li>
        <router-link 
          :to="baseRoutes.CARROM_BOARD"
          active-class="active"
        >
          <i class="fa fa-vector-square" />
          <span class="nav__link-text">CAROM-BOARD</span>
        </router-link>
      </li>
      <li>
        <router-link 
          :to="baseRoutes.TABLE_TENNIS"
          active-class="active"
        >
          <i class="fa fa-table-tennis" />
          <span class="nav__link-text">TABLE-TENNIS</span>
        </router-link>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-ellipsis-h" />
          <span class="nav__link-text">...MORE</span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import EventBus from '../../events/eventBus';
import { invertedLogo } from '../../assets/images';
import { BASE_ROUTES } from '../../constants/routes';

export default {
  name: 'NavBar',
  props: {
    title: {
      type: Object,
      default() {
        return {
          primaryText: 'LF Sports',
          secondaryText: ''
        };
      }
    }
  },
  data: function() {
    return {
      logo: invertedLogo,
      baseRoutes: Object.freeze(BASE_ROUTES)
    };
  },
  computed: {
    pageTitle: function() {
      return `${this.title.primaryText} ${this.title.secondaryText}`;
    }
  },
  created: function() {
    EventBus.$on('change-logo-title', (primaryText = 'LF Sports', secondaryText = '') => {
      this.title.primaryText = primaryText;
      this.title.secondaryText = secondaryText;
    });
  }
};
</script>
