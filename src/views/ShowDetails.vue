<template>
  <div class="container" v-if="showDetails">
    <h1 class="h3">{{ showDetails.name }}</h1>
    <v-row>
      <v-col class="col-md-8 col-12">
        <v-img :src="getImageSrc(showDetails.image)" height="220px" :alt="showDetails.name"></v-img>
        <div class="grey--text py-2" v-html="showDetails.summary"></div>
        <template v-if="showDetails._embedded && showDetails._embedded.cast.length">
          <h3>Cast</h3>
          <v-row>
            <CastCard v-for="person in showDetails._embedded.cast" :person="person" :key="person.id" />
          </v-row>
        </template>
      </v-col>
      <v-col class="col-md-4 col-12">
        <v-card>
          <v-card-title>About This Show</v-card-title>
          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
              v-if="showDetails.rating"
            >
              <v-rating
                :value="showDetails.rating.average"
                background-color="amber"
                color="amber"
                dense
                half-increments
                readonly
                size="13"
                length="10"
              ></v-rating>
              <div class="grey--text subtitle-1 ml-2">
                {{ showDetails.rating.average ? showDetails.rating.average : '-'}}
              </div>
            </v-row>

            <div class="my-2">
              <div v-if="showDetails.network"><b>Network:</b> {{ showDetails.network.name }}</div>
              <div><b>Status:</b> {{ showDetails.status }}</div>
              <div><b>Runtime:</b> {{ showDetails.runtime }}</div>
              <div v-if="showDetails.genres"><b>Genre:</b> {{ showDetails.genres.join(', ') }}</div>
              <div><b>Type:</b> {{ showDetails.type }}</div>
            </div>
            <v-chip-group
              v-if="showDetails.schedule"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip small v-for="day in showDetails.schedule.days" :key="day">{{ day }}</v-chip>
              <v-chip small color="indigo">
                <v-icon small left>
                  mdi-clock
                </v-icon>
                {{ showDetails.schedule.time}}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CastCard from '@/components/CastCard/CastCard.vue'
import ImageSrc from '@/mixins/ImageSrc'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  name: 'ShowDetails',
  mixins: [ImageSrc],
  components: {
    CastCard
  },
  mounted () {
    this.getShowDetails(this.id)
  },
  computed: {
    ...mapState(['showDetails'])
  },
  methods: {
    ...mapActions(['getShowDetails'])
  }
}
</script>
