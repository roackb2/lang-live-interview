import { User } from '../types'
import range from 'lodash/range'

export const mockUsers = range(50).map((i: number) => ({
  username: `user${i}`
}))