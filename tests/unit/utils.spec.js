import { formattedDate } from '@/services/utils'

describe('Utility functions', () => {
  describe('formattedDate', () => {
    it('Should format date correctly and add leading zeros only if needed', () => {
      const testDate = '10 January, 2020'
      expect(formattedDate(testDate)).toEqual('2020-01-10')
    })
  })
})
