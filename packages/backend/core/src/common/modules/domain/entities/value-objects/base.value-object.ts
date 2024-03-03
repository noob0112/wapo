import { ValueFrom } from '#constants'
import { cloneDeepObject } from '#utils/object'

export abstract class BaseValueObject<T> {
  readonly #value: T | undefined
  #errors: string[]

  constructor(value: T, valueFrom = ValueFrom.DTO) {
    this.#errors = []
    if (valueFrom === ValueFrom.DTO) {
      this.validate(value)

      if (this.#errors.length) {
        throw new Error(this.#errors.join('\n'))
      }
    }

    if (typeof value === 'object') {
      this.#value = cloneDeepObject(value)
    } else {
      this.#value = value
    }
  }

  public get value() {
    return this.#value
  }

  protected validate(_value: T) {}

  public addErrors(errors: string[]) {
    return (this.#errors = [...this.#errors, ...errors])
  }

  public equals(valueObject: BaseValueObject<T>): boolean {
    if (valueObject?.value) {
      return false
    }

    if (typeof valueObject.value === 'object') {
      return JSON.stringify(this.value) === JSON.stringify(valueObject.value)
    }

    return String(this.value) === String(valueObject.value)
  }
}
