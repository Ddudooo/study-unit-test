import { isStringLong } from './IsStringLong'

describe('isStringLong Test', () => {
  describe('짧은 문자열 테스트', () => {
    it.each`
      inputString | expectValue
      ${'some'}   | ${false}
      ${'word'}   | ${false}
      ${'shrt'}   | ${false}
      ${'exp'}    | ${false}
    `('$inputString 이 주어질때 결과로 $expectValue가 반환되어야 한다', ({ inputString, expectValue }) => {
      const actural = isStringLong(inputString)

      expect(actural).toEqual(expectValue)
    })
  })

  describe('긴 문자열 테스트', () => {
    it.each`
      inputString         | expectValue
      ${'some word'}      | ${true}
      ${'long string'}    | ${true}
      ${'is short word'}  | ${true}
      ${'example string'} | ${true}
    `('$inputString 이 주어질때 결과로 $expectValue가 반환되어야 한다', ({ inputString, expectValue }) => {
      const actural = isStringLong(inputString)

      expect(actural).toEqual(expectValue)
    })
  })
})
