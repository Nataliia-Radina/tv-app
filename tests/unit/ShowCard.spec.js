import ShowCard from '@/components/ShowCard/ShowCard'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

it('expect to render ShowCard component', () => {
  const show = {
    airtime: "00:00",
    id: 1963908,
    show: {
      id: 363,
      image: { medium: "src-medium-1", original: "src-original-1" },
      name: "Show1",
      rating: { average: 5.8 }
    }
  }
  const wrapper = shallowMount(ShowCard, {
    propsData: { show }
  })
  expect(wrapper).toMatchSnapshot()
})
