import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '@/services/api'

Vue.use(Vuex)

const fetchData = ({ context, name, mutation }, options) => {
  API[name](options)
    .then(response => response.json())
    .then(data => {
      context.commit('setError', false)
      context.commit(mutation, data)
    })
    .catch(() => {
      context.commit('setError', true)
    })
}

export const state = () => ({
  todayShows: [],
  searchShows: [],
  hasError: false,
  showDetails: {}
})

export const mutations = {
  setTodayShows (state, data) {
    state.todayShows = data
  },
  setSearchShows (state, data) {
    state.searchShows = data
  },
  setShowDetails (state, data) {
    state.showDetails = data
  },
  setError (state, data) {
    state.hasError = data
  }
}

export const actions = {
  getTodayShows (context, date) {
    fetchData({ context, name: 'getTodayShows', mutation: 'setTodayShows' }, date)
  },
  getShowsByQuery (context, query) {
    fetchData({ context, name: 'getShowsByQuery', mutation: 'setSearchShows' }, query)
  },
  getShowDetails (context, id) {
    fetchData({ context, name: 'getShowDetails', mutation: 'setShowDetails' }, id)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
