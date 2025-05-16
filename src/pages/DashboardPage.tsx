import Header from '@/components/layout/Header';
import { UsersTable } from '@/features/dashboard/components/UsersTable';
import { PaginationProvider } from '@/features/dashboard/contexts/paginationContext';

export default function DashboardPage() {

  return (
    <PaginationProvider>
        <Header />
        <UsersTable />
    </PaginationProvider>
  )
}
