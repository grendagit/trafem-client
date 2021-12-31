import moment from 'moment'
import * as R from 'ramda'

export function prepareDuration(from: string | null, to: string) {
  if (from) {
    return `${parseUTCAndFormat(from)} – ${parseUTCAndFormat(to)}`
  }
  return parseUTCAndFormat(to)
}

export function parseUTCAndFormat(
  input: string,
  stringOfTokens = 'DD.MM.YYYY'
) {
  return moment.utc(input).format(stringOfTokens)
}

export function prepareParticipationPrice(
  min: number | null,
  max: number,
  currency = 'PLN'
) {
  if (R.isNil(min)) {
    return `${max} ${currency}`
  }
  return `${min} – ${max} ${currency}`
}
