import { Table } from "@/components/ui/Table";
import type { User } from "@/types/user";
import TableOptions from "./TableOptions";
import { usePagination } from "../contexts/paginationContext";
import { useUsers } from "@/lib/swr/hooks/useUsers";

const UsersTableRow = (user: User) => {
  return(
    <tr>
      <td className="px-2 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img 
            src={user.avatar} 
            alt={user.first_name + user.last_name}
            className="h-10 w-10 rounded-full mr-4"
          />
          <span className="font-medium">{user.first_name + user.last_name}</span>
        </div>
      </td>
      <td className="py-4 whitespace-nowrap text-gray-600">
        {user.email}
      </td>
    </tr>
  );
}
export const UsersTable = () => {
  const { pagination } = usePagination();
  const { data, error, isLoading } = useUsers(pagination);
  const users = data?.data || [];

  
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>No data found</p>;

  return (
    <section className="custom-container bg-surface rounded py-2">
      <TableOptions />
      <Table
        headers={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' }
        ]}
        data={users}
        renderRow={(user) => (<UsersTableRow {...user}/>)}
      />
    </section>
  );
};