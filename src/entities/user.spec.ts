import { expect, test } from 'vitest'
import { User } from './user'


test('Create an user', () => {
    expect(new User({ email: 'hallan@neves.com', name: 'Hállan', password: '1234' })).toBeInstanceOf(User)
    expect(() => new User({ email: 'hallan@neves.com', name: 'Hállan', password: '134' })).toThrow()
})