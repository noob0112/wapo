import { MarkOptional } from 'ts-essentials'

import { AggregateRoot } from '#common/modules/domain/entities/base.aggregate'
// import { UniqueEntityId } from '#common/modules/domain/entities/value-objects/unique-entity-id'
import { ValueFrom } from '#constants'
import nanoid from '#helpers/nanoid'

export interface IBookProps {
  bookId: string
  title: string
  description: string
  thumbnail: string
}

export interface ICreateBookProps extends MarkOptional<IBookProps, 'bookId'> {}

export class Book extends AggregateRoot<IBookProps> {
  constructor(props: ICreateBookProps, entityFrom = ValueFrom.DTO) {
    const { bookId = nanoid(), title, description, thumbnail } = props

    super({ props: { bookId, title, description, thumbnail } }, entityFrom)
  }
}
