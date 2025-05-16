import useSWR from 'swr';
import type { PaginatedResponse } from '@/types/api';
import type { User } from '@/types/user';
import { UserService } from '@/services/api/users';

/**
 * Custom hook for fetching all users
 * @param params Pagination and filtering options
 * Grants correct typing to the API request
 * Adds optional optimization
 * Where our fetching technology(SWR) is implemented
 */
export const useUsers = (params?: {
  page?: number;
  per_page?: number;
  search?: string;
}) => {
  console.log(params);
  return useSWR<PaginatedResponse<User>>(
      ['/users', params],
      () => UserService.getAll(params),
      {
      revalidateOnFocus: false,
      keepPreviousData: true, // Smooth pagination transitions
      dedupingInterval: 1000 * 60 * 5, // Verificar o que é Dedupe
      }
  );
};

/**
 * Hook for fetching a single user
 * @param id User ID
 */
// export const useUser = (id: string) => {
//   return useSWR<User>(
//     `/users/${id}`,
//     swrFetcher.get,
//     {
//       errorRetryCount: 3,
//       shouldRetryOnError: (error) => error.status !== 404
//     }
//   );
// };

/**
 * Hook for creating a new user
 */
// export const useCreateUser = () => {
//   const { mutate } = useSWRConfig();
  
//   return useSWRMutation(
//     '/users',
//     (key, { arg }: { arg: CreateUserDTO }) => swrMutator.post(key, arg),
//     {
//       onSuccess: () => {
//         // Revalidate user lists after creation
//         mutate(key => typeof key === 'string' && key.startsWith('/users'));
//       }
//     }
//   );
// };

/**
 * Hook for deleting a user
 */
// export const useDeleteUser = () => {
//   const { mutate } = useSWRConfig();
  
//   return useSWRMutation(
//     '/users',
//     (key, { arg: id }: { arg: string }) => swrFetcher.delete(`${key}/${id}`),
//     {
//       onSuccess: (_, { arg: id }) => {
//         // Optimistic updates
//         mutate<PaginatedResponse<User>>(
//           key => typeof key === 'string' && key.startsWith('/users'),
//           (data) => data ? {
//             ...data,
//             data: data.data.filter(user => user.id !== id)
//           } : undefined
//         );
//       }
//     }
//   );
// };