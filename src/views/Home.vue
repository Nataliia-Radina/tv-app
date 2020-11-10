<template>
  <ShowList :shows="todayShows" />
</template>

<script>
import ShowList from '@/components/ShowList/ShowList.vue'
import { mapState, mapActions } from 'vuex'
import { formattedDate } from '@/services/utils'

export default {
  name: 'Home',
  components: {
    ShowList
  },
  computed: {
    today () {
      return this.formattedDate()
    },
    ...mapState(['todayShows'])
  },
  methods: {
    formattedDate,
    ...mapActions(['getTodayShows'])
  },
  mounted () {
    this.getTodayShows(this.today)
  }
}
</script>
