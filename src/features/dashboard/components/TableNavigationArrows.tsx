import { LeftArrow, RightArrow } from '@/components/icons/DirectionArrows'
import { usePagination } from '../contexts/paginationContext';

export default function TableNavigationArrows() {
    const { pagination, prevPage, nextPage } = usePagination();

    return (
        <section className='mx-auto flex justify-end px-2 gap-4'>
            <button 
            onClick={prevPage}
            disabled={pagination.page === 1}
            className={pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
                <LeftArrow />
            </button>
            <button onClick={nextPage}>
                <RightArrow />
            </button>
        </section>
    )
}
