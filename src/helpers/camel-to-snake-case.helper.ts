import type { Generic } from '../types/generic.type'

export function camelToSnakeCase(camelCaseString: string) {
  return camelCaseString.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

export function objectShallowCamelToSnakeKeys(generic: Generic) {
  return Object.entries(generic).reduce(
    (objectWithSnakeCaseKeys, [key, value]) => {
      objectWithSnakeCaseKeys[camelToSnakeCase(key)] = value

      return objectWithSnakeCaseKeys
    },
    {} as Generic
  )
}
