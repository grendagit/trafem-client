import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter.helper'

export function generateCost(text: string, value: number): string {
  return `${capitalizeFirstLetter(text)}: ${value.toLocaleString('pl-PL')} PLN`
}
