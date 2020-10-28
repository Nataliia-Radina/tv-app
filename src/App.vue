<template>
  <v-app id="app">
    <v-app-bar app>
      <v-row>
        <router-link to="/"
          class="text-h6 d-flex white--text align-center pl-3 text-decoration-none">
          TV-APP
        </router-link>
        <v-col
          cols="10"
          sm="6"
          md="4"
          class="ml-auto"
        >
          <SearchField
            :value="searchQuery"
            placeholder="Search all shows"
            @queryChange="searchShowsByQuery($event)"
            @clearInput="clearInput"
          />
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <ShowList :shows="searchShows" v-if="searchQuery"></ShowList>
          <router-view v-else />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ShowList from '@/components/ShowList/ShowList.vue'
import SearchField from '@/components/SearchField/SearchField.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    ShowList,
    SearchField
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState(['searchShows'])
  },
  methods: {
    searchShowsByQuery (val) {
      this.searchQuery = val
      if (val) {
        this.getShowsByQuery(val)
      }
    },
    clearInput () {
      this.searchQuery = ''
    },
    ...mapActions(['getShowsByQuery'])
  }
}
</script>
