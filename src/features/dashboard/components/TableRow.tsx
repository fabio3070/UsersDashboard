import type { User } from "@/types/user";

export const TableRow = (user: User) => {
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