import { Book, ICreateBookProps } from '#modules/book/domain/entities/book/book.entity'
const props: ICreateBookProps = { title: 'string', description: 'string', thumbnail: 'string' }
try {
  const book = new Book(props)
  console.log(book)
} catch (error) {
  console.log(error)
}
