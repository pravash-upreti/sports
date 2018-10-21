<template>
  <div>
    <div 
      v-if="loading"
      class="container" 
    >
      <loading-icon />
    </div>
    <div 
      v-else-if="error"
      class="container" 
    >
      <div class="alert alert-error">Unable to load data. Please try again later.</div>
    </div>
    <div 
      v-else
      class="futsal"
    >
      <div class="tournament-content">
        <div class="container-fluid">
          <sub-header />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import EventBus from '../../events/eventBus';
import { FUTSAL_ROUTES } from '../../constants/routes';

import SubHeader from './partials/SubHeader';
import FixtureService from '../../services/FixtureService';
import LoadingIcon from '../../components/common/LoadingIcon';

export default {
  name: 'Futsal',
  components: { SubHeader, LoadingIcon },
  data: function() {
    return {
      data: {},
      error: false,
      loading: true,
      fixtureLink: FUTSAL_ROUTES.FIXTURE
    };
  },
  created: function() {
    EventBus.$emit('change-logo-title', 'Futsal');

    this.fetchData();
  },
  methods: {
    fetchData: function() {
      axios
        .get(process.env.VUE_APP_API_FUTSAL)
        .then(response => {
          this.data = this.getSanitizedData(response.data.data);

          EventBus.$emit('change-logo-title', this.data.details.title, this.data.details.year);
        })
        .catch(() => {
          this.error = true;
        })
        .then(() => {
          this.loading = false;
        });
    },

    getSanitizedData: function(rawData) {
      const data = {
        teams: rawData.teams,
        details: rawData.details,
        stats: rawData.stats,
        points: rawData.table,
        recents: FixtureService.getRecentFixtures(rawData),
        results: FixtureService.getResults(rawData.fixtures),
        fixtures: FixtureService.getFixtures(rawData.fixtures)
      };

      return data;
    }
  }
};
</script>
