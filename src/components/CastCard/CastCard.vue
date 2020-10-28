<template>
  <v-col
    :key="person.id"
    cols="6"
    sm="4"
    md="3"
    xl="2"
  >
    <v-card tile>
      <v-img :src="getImageSrc(person.person.image)" height="200px" :alt="person.name"></v-img>
      <v-card-text>
        <b>{{ person.person.name }}</b> as {{ person.character.name }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import ImageSrc from '@/mixins/ImageSrc'
export default {
  name: 'CardCast',
  mixins: [ImageSrc],
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>
