<template>
  <v-col class="col-12">
    <v-row>
      <ShowCard :show="show" v-for="show in shows" :key="show.id" />
    </v-row>
  </v-col>
</template>

<script>
import ShowCard from '@/components/ShowCard/ShowCard.vue'
export default {
  name: 'ShowList',
  components: {
    ShowCard
  },
  props: {
    shows: {
      type: Array,
      required: true
    }
  }
}
</script>
