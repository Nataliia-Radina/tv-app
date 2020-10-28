// https://vuex.vuejs.org/en/testing.html
export const testAction = ({
                             action, payload, state = {}, rootState = {}, getters = {}, expectedMutationsPayload
                           }, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutationsPayload[count]

    try {
      expect(type).toBe(mutation.type)
      if (payload) {
        expect(payload).toEqual(mutation.payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutationsPayload.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state, getters, rootState }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutationsPayload.length === 0) {
    expect(count).toBe(0)
    done()
  }
}
