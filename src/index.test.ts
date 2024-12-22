import { describe, expect, it } from 'vitest'
import { dateConvert } from '.'

const dateConvertTestCases = [
  {
    str: '1970-01-01T00:00:00.000Z',
    expected: '1970-01-01',
  },
  {
    str: '2021-01-01T00:00:00.000Z',
    expected: '2021-01-01',
  },
  {
    str: '2021-12-31T23:59:59.999Z',
    expected: '2021-12-31',
  },
  {
    str: '1999-12-31T23:59:59.999Z',
    expected: '1999-12-31',
  },
  {
    str: '2000-01-01T00:00:00.000Z',
    expected: '2000-01-01',
  },
  {
    str: '2023-07-15T15:30:45.123Z',
    expected: '2023-07-15',
  },
  {
    str: '2025-09-09T00:00:00.000Z',
    expected: '2025-09-09',
  },
  {
    str: '1980-02-29T12:00:00.000Z',
    expected: '1980-02-29',
  },
  {
    str: '2016-02-29T23:59:59.999Z',
    expected: '2016-02-29',
  },
  {
    str: '2030-01-01T01:01:01.001Z',
    expected: '2030-01-01',
  },
]

describe('dateConvert', () => {
  it.each(dateConvertTestCases)('dateConvert($str) -> $expected', ({ str, expected }) => {
    expect(dateConvert(str)).toBe(expected)
  })
})
