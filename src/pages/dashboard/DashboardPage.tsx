import { useUsers } from '@/lib/swr/hooks/useUsers'
import type { User } from '@/types/user';
import React, { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 6
  });
  const { data: usersData, error, isLoading } = useUsers(pagination);

  useEffect(() => {
    console.log(usersData)
  }, [usersData])
  
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>No data found</p>

  return (
    <div>
dashbaord
    </div>
  )
}
