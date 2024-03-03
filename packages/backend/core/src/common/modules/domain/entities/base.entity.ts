import { MarkOptional } from 'ts-essentials'
// import { UniqueEntityId } from './value-objects/unique-entity-id'
import { ValueFrom } from '#constants'
import { cloneDeepObject } from '#utils/object'

export interface BaseEntityProps {
  id: unknown
  updatedAt: Date
  createdAt: Date
  deletedAt: Date
}
// export interface CreateEntityProps<T> extends MarkOptional<BaseEntityProps, 'createdAt' | 'updatedAt' | 'deletedAt'> {}
export interface CreateEntityProps<T>
  extends MarkOptional<BaseEntityProps, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {
  props: T
}

export abstract class Entity<Props> {
  #id: unknown
  readonly #props: Props
  readonly #createdAt: Date
  readonly #updatedAt: Date
  readonly #deletedAt: Date
  #errors: string[]

  constructor(createEntityProps: CreateEntityProps<Props>, entityFrom = ValueFrom.DTO) {
    const { id, createdAt, updatedAt, deletedAt, props } = createEntityProps

    this.#errors = []
    if (entityFrom === ValueFrom.DTO) {
      this.validate(props)

      if (this.#errors.length) {
        throw new Error(this.#errors.join('\n'))
      }
    }

    this.#id = id
    this.#props = props
    const now = new Date()
    this.#createdAt = createdAt || now
    this.#updatedAt = updatedAt || now
    this.#deletedAt = deletedAt || now
  }

  static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity
  }

  get id(): unknown {
    return this.#id
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  get updatedAt(): Date {
    return this.#updatedAt
  }

  get deletedAt(): Date {
    return this.#deletedAt
  }

  get props(): Props {
    return cloneDeepObject(this.#props)
  }

  public addError(error: string) {
    this.#errors.push(error)
  }

  /**
   * Convert an Entity and all sub-entities/Value Objects it
   * contains to a plain object with primitive types. Can be
   * useful when logging an entity during testing/debugging
   */
  public toObject() {
    const result = {
      id: this.id,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...this.props
    }
    return Object.freeze(result)
  }
  /**
   * Each entity must have some validate/business rules
   * This method is called every time before save this entity to the database
   */
  public validate(_props: Props) {}

  #validateProps(_props: Props) {}
}
