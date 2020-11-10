import CastCard from '@/components/CastCard/CastCard.vue'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

it('expect to render CastCard component', () => {
  const person = {
    name: "Emilia Clarke",
    id: 1,
    person: {
      name: "Emilia Clarke",
      image: { medium: "src-medium-1", original: "src-original-1" },
    },
    character: {
      name: "Daenerys Targaryen",
      image: { medium: "src-medium-2", original: "src-original-2" },
    }
  }
  const wrapper = shallowMount(CastCard, {
    propsData: { person }
  })
  expect(wrapper).toMatchSnapshot()
})
