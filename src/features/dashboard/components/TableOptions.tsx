import { LeftArrow, RightArrow } from '@/components/icons/DirectionArrows';
import type { Pagination } from '@/types/user';

type TableOptionsProps = {
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>,
  hasMoreData: boolean
}
export default function TableOptions({pagination, setPagination, hasMoreData}: TableOptionsProps) {

  const onClickPrevPage = () => {
    if (pagination.page > 1) setPagination({ ...pagination, page: pagination.page - 1 });
  }
  const onClickNextPage = () => {
    if(hasMoreData) setPagination({ ...pagination, page: pagination.page + 1 });
  }

  return (
    <section className='mb-2'>
        <section className='mx-auto flex justify-end px-2 gap-4'>
            <button 
            onClick={onClickPrevPage}
            disabled={pagination.page === 1}
            className={pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
                <LeftArrow />
            </button>
            <button 
            onClick={onClickNextPage}
            disabled={!hasMoreData}
            className={!hasMoreData ? 'opacity-50 cursor-not-allowed' : ''}
            >
                <RightArrow />
            </button>
        </section>
    </section>
  )
}
