import { httpClient } from '../http/client';
import type { User } from '@/types/user';

/**
 * Encapsulates all the API knowledge and serves as an Interface to implement the business logic(ex: pagination)
 */
export const UserService = {
  getAll: () => httpClient<User[]>({endpoint: '/users', method: 'GET'}),
  getById: (id: string) => httpClient<User>({endpoint: `/users/${id}`, method: 'GET'}),
  create: (user: Omit<User, 'id'>) => 
    httpClient<User>({endpoint: '/users', method: 'POST', body: user })
};