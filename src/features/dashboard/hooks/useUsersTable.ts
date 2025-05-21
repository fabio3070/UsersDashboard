import { useCallback, useMemo, useState } from 'react';
import { useUsers } from '@/lib/swr/hooks/useUsers';
import type { Pagination } from '@/types/user';

export const useUserTable = (initialPagination: Pagination = { page: 1, per_page: 4 }) => {
  const [pagination, setPagination] = useState<Pagination>(initialPagination);
  const { data, error, isLoading } = useUsers(pagination);
  
  const users = useMemo(() => data?.data || [], [data]);
  const hasMoreData = users.length >= pagination.per_page;

  const handleNext = useCallback(() => {
    if (hasMoreData) {
      setPagination(prev => ({ ...prev, page: prev.page + 1 }));
    }
  }, [hasMoreData]);

  const handlePrev = useCallback(() => {
    if (pagination.page > 1) {
      setPagination(prev => ({ ...prev, page: prev.page - 1 }));
    }
  }, [pagination.page]);

  return {
    users,
    error,
    isLoading,
    pagination,
    handleNext,
    handlePrev,
    isPrevDisabled: pagination.page === 1,
    isNextDisabled: !hasMoreData,
  };
};