// contexts/pagination-context.tsx
import React from 'react';
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Pagination = {
  page: number;
  per_page: number;
};

type PaginationContextType = {
  pagination: Pagination;
  nextPage: () => void;
  prevPage: () => void;
  setPerPage: (perPage: number) => void;
};

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export function PaginationProvider({ children }: { children: ReactNode }) {
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    per_page: 4
  });

  const nextPage = () => setPagination(prev => ({ ...prev, page: prev.page + 1 }));
  const prevPage = () => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }));
  const setPerPage = (per_page: number) => setPagination(prev => ({ ...prev, per_page }));

  return (
    <PaginationContext.Provider value={{ pagination, nextPage, prevPage, setPerPage }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
}