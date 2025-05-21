import { TableSkeleton } from '@/components/skeletons/TableSkeleton';
import TableOptions from '@/features/dashboard/components/TableOptions';
import { TableRow } from './TableRow';
import ErrorText from '@/components/ui/ErrorText';
import { useUserTable } from '../hooks/useUsersTable';

const headers = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
];

export const Table = () => {
  const {
    users,
    error,
    isLoading,
    pagination,
    handleNext,
    handlePrev,
    isPrevDisabled,
    isNextDisabled,
  } = useUserTable();
    
  return (
    <section className="custom-container bg-surface rounded py-2">
        <TableOptions 
        onNext={handleNext} 
        onPrev={handlePrev} 
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        />
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
            {error && 
              <tr>
                <td colSpan={2}>
                  <ErrorText />
                </td>
              </tr>
            }
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
