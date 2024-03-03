import * as nanoid from 'nanoid'

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'
const length = 21

export default nanoid.customAlphabet(alphabet, length)
