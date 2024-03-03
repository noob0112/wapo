import nanoid from '#helpers/nanoid'
import { BaseValueObject } from './base.value-object'

export type TUniqueEntityId = string | number

export class UniqueEntityId extends BaseValueObject<TUniqueEntityId> {
  constructor(id?: string | number) {
    super(id ? id : nanoid())
  }
}
