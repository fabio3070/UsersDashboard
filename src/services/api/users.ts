import type { PaginatedResponse } from '@/types/api';
import { httpClient } from '../http/client';
import type { User } from '@/types/user';

const DEFAULTPAGINATION = {
  page: '1',
  limit: '6'
}

/**
 * Encapsulates all the API knowledge and serves as an Interface to implement the business logic(ex: pagination)
 */
export const UserService = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }) => {
    const queryString = new URLSearchParams({
      page: params?.page?.toString() ?? DEFAULTPAGINATION.page,
      per_page: params?.limit?.toString() ?? DEFAULTPAGINATION.limit
    }).toString();

    return httpClient<PaginatedResponse<User>>({
      endpoint: `/users?${queryString}`,
      method: 'GET'
    });
  },
  getById: (id: string) => httpClient<User>({endpoint: `/users/${id}`, method: 'GET'}),
  create: (user: Omit<User, 'id'>) => 
    httpClient<User>({endpoint: '/users', method: 'POST', body: user })
};