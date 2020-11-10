import { actions, mutations, state } from '@/store/index'
import { testAction } from '@/store/helpers'
import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks()

beforeEach(() => {
  fetch.resetMocks()
})

const shows = [
  {
    id: 1,
    name: 'show1',
    airtime: '00:00',
    genres: ['drama']
  },
  {
    id: 2,
    name: 'show2',
    airtime: '00:30',
    genres: ['comedy']
  }
]


const showDetails = {
  id: 1,
  name: 'show1',
  airtime: '00:00',
  genres: ['drama']
}

describe('mutations', () => {
  it('setTodayShows should set correct data', () => {
    mutations.setTodayShows(state, shows)
    expect(state.todayShows).toEqual(shows)
  })

  it('setShowDetails should set correct data', () => {
    mutations.setShowDetails(state, showDetails)
    expect(state.showDetails).toEqual(showDetails)
  })

  it('should set hasError correctly', () => {
    mutations.setError(state, true)
    expect(state.hasError).toEqual(true)
    mutations.setError(state, false)
    expect(state.hasError).toEqual(false)
  })

})

describe('actions', () => {
  it('should commit setTodayShows with correct payload', done => {
    fetch.mockResponseOnce(JSON.stringify(shows))
    testAction({
      action: actions.getTodayShows,
      expectedMutationsPayload: [
        { type: 'setError', payload: false },
        { type: 'setTodayShows', payload: shows }
      ]
    }, done)
  })

  it('should commit setSearchShows with correct payload', done => {
    fetch.mockResponseOnce(JSON.stringify(shows))
    testAction({
      action: actions.getShowsByQuery,
      expectedMutationsPayload: [
        { type: 'setError', payload: false },
        { type: 'setSearchShows', payload: shows }
      ]
    }, done)
  })

  it('should commit setShowDetails with correct payload', done => {
    fetch.mockResponseOnce(JSON.stringify(showDetails))
    testAction({
      action: actions.getShowDetails,
      expectedMutationsPayload: [
        { type: 'setError', payload: false },
        { type: 'setShowDetails', payload: showDetails }
      ]
    }, done)
  })

  it('should commit hasError in case of error', done => {
    const error = 'An error occurred'
    fetch.mockReject(() => Promise.reject(error))
    const payload = error
    testAction({
      action: actions.getTodayShows,
      payload,
      expectedMutationsPayload: [
        { type: 'setError', payload: true}
      ]
    }, done)
  })

})

describe('getters', () => {

})


