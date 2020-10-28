<template>
  <ShowList :shows="todayShows" />
</template>

<script>
import ShowList from '@/components/ShowList/ShowList.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    ShowList
  },
  computed: {
    today () {
      const now = new Date(Date.now())
      const dateToday = `${now.getFullYear()}-${(now.getMonth() + 1)}-${now.getDate()}`
      return dateToday
    },
    ...mapState(['todayShows'])
  },
  methods: {
    ...mapActions(['getTodayShows'])
  },
  mounted () {
    this.getTodayShows(this.today)
  }
}
</script>
