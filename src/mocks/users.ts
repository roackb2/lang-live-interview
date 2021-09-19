import { User } from '../types'
import range from 'lodash/range'
import avatar from '../assets/images/avatar.png'

export const mockUsers = range(50).map((i: number) => ({
  username: `user${i}`,
  avatar
}))