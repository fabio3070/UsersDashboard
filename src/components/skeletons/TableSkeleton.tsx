import type { Pagination } from "@/types/user";

export const SkeletonRow = () => {
  return (
    <tr>
      <td className="px-2 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full mr-4 bg-gray-200 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>
      </td>
      <td className="py-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      </td>
    </tr>
  );
};

export const TableSkeleton = ({ pagination }: { pagination: Pagination }) => {
  return (
    <tbody className="divide-y divide-gray-200">
        {Array.from({ length: pagination.per_page }).map((_, index) => (
        <SkeletonRow key={`skeleton-${index}`} />
        ))}
    </tbody>
  );
};