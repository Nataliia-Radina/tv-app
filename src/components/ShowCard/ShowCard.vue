<template>
  <v-col
    cols="6"
    sm="4"
    md="3"
    lg="2"
    class="show-card"
  >
    <router-link :to="`/show/${show.show.id}`">
    <v-card tile>
      <v-chip small color="indigo" v-if="show.airtime">
        <v-icon small left>
          mdi-clock
        </v-icon>
        {{ show.airtime }}
      </v-chip>
      <v-img :src="getImageSrc(show.show.image)" height="200px" :alt="show.name"></v-img>
      <v-card-subtitle class="text-center pa-2 pb-1">
        <h4 class="text-truncate">
          {{ show.show.name }}
        </h4>
      </v-card-subtitle>
      <v-card-text align-center class="px-2 pt-0 pb-3 text-right">
        <span class="grey--text text--lighten-2">
          <v-icon small color="yellow accent-4">
            mdi-star
          </v-icon>
          {{ rating }}
        </span>
      </v-card-text>
    </v-card>
    </router-link>
  </v-col>
</template>

<script>
import './show-card.scss'
import ImageSrc from '@/mixins/ImageSrc'

export default {
  name: 'ShowCard',
  mixins: [ImageSrc],
  props: {
    show: {
      type: Object,
      required: true
    }
  },
  computed: {
    rating () {
      return this.show.show.rating.average ? this.show.show.rating.average : '-'
    }
  }
}
</script>
