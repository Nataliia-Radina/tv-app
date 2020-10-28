<template>
  <v-text-field
    mt-2
    clearable
    filled
    dense
    hide-details
    rounded
    :v-model="value"
    :placeholder="placeholder"
    @input="$emit('queryChange',  $event)"
    @click:clear="$emit('clearInput')"
  >
    <v-icon
      slot="prepend-inner"
    >
      mdi-magnify
    </v-icon>
  </v-text-field>
</template>

<script>
export default {
  name: 'SearchField',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  }
}
</script>
