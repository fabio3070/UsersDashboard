import { TableSkeleton } from '@/components/skeletons/TableSkeleton';
import TableOptions from '@/features/dashboard/components/TableOptions';
import { useUsers } from '@/lib/swr/hooks/useUsers';
import type { Pagination } from '@/types/user';
import { useState } from 'react'
import { TableRow } from './TableRow';

const headers = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
];

export const Table = () => {
  const [pagination, setPagination] = useState<Pagination>({
      page: 1,
      per_page: 4
  });
  const { data, error, isLoading } = useUsers(pagination);
  const users = data?.data || [];
  const hasMoreData = users.length >= pagination.per_page;

  if (error) return <p>No data found</p>;
    
  return (
    <section className="custom-container bg-surface rounded py-2">
        <TableOptions pagination={pagination} setPagination={setPagination} hasMoreData={hasMoreData}/>
        <table className="min-w-full divide-y divide-primary ">
            <thead>
                <tr>
                {headers.map((header) => (
                    <th
                    key={header.key}
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                    >
                    {header.label}
                    </th>
                ))}
                </tr>
            </thead>
            {isLoading ? (
              <TableSkeleton pagination={pagination} />
            ): (
              <tbody className="divide-y divide-gray-200">
                  {users.map((user) => <TableRow {...user}/>)}
              </tbody>
            )}
        </table>
    </section>
  )
}
