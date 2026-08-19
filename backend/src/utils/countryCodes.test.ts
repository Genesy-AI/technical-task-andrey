import { describe, it, expect } from 'vitest'
import { normalizeCountryCode } from './countryCodes'

describe('normalizeCountryCode', () => {
  it('should accept valid alpha-2 codes regardless of case or padding', () => {
    expect(normalizeCountryCode('ES')).toBe('ES')
    expect(normalizeCountryCode('es')).toBe('ES')
    expect(normalizeCountryCode('  fr  ')).toBe('FR')
  })

  it('should map UK onto its assigned code GB', () => {
    expect(normalizeCountryCode('uk')).toBe('GB')
  })

  it('should reject values that are not real country codes', () => {
    expect(normalizeCountryCode('XXX')).toBeNull()
    expect(normalizeCountryCode('12')).toBeNull()
    expect(normalizeCountryCode('Spain')).toBeNull()
  })

  it('should treat empty input as no country', () => {
    expect(normalizeCountryCode('')).toBeNull()
    expect(normalizeCountryCode(null)).toBeNull()
    expect(normalizeCountryCode(undefined)).toBeNull()
  })
})
