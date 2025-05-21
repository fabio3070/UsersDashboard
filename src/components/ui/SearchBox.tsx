import { useState } from 'react';
import type { ChangeEvent } from 'react';

export default function SearchBox() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const placeholder = 'Search users...';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
    };
    
    return (
        <div className="flex justify-end px-6">
            <input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleChange}
                className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
        </div>
    )
}
