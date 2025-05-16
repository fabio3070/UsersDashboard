import { type ReactNode } from 'react'

type TableProps<T> = {
    headers: {
      key: string;
      label: string;
      width?: string;
    }[];
    data: T[];
    renderRow: (item: T) => ReactNode;
    className?: string;
  };

export const Table = <T,>({
    headers,
    data,
    renderRow
}: TableProps<T> ) => {
  return (
    <section>
        <table className="min-w-full divide-y divide-primary ">
            <thead>
                <tr>
                {headers.map((header) => (
                    <th
                    key={header.key}
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${header.width || ''}`}
                    >
                    {header.label}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {data.map((item) => renderRow(item))}
            </tbody>
        </table>
    </section>
    )
}
