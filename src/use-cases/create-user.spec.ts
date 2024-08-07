import { describe, expect, it } from 'vitest'
import { User } from '../entities/user'
import { CreateUser } from './create-user'


describe('Create an user', () => {
    it('should be able to create an user', () => {
        const createUser = new CreateUser()

        expect(
            createUser.execute(
                { email: 'hallan@neves.com', name: 'Hállan', password: '1234' }
            )
        ).resolves.toBeInstanceOf(User)
    })
})