import { LeftArrow, RightArrow } from '@/components/icons/DirectionArrows';

type TableOptionsProps = {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  PrevButton?: React.ComponentType<{ disabled: boolean; onClick: () => void }>;
  NextButton?: React.ComponentType<{ disabled: boolean; onClick: () => void }>;
};
export default function TableOptions({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
  PrevButton = DefaultPrevButton,
  NextButton = DefaultNextButton,
}: TableOptionsProps) {
  return (
    <section className="mb-2">
      <section className="mx-auto flex justify-end px-2 gap-4">
        <PrevButton disabled={isPrevDisabled} onClick={onPrev} />
        <NextButton disabled={isNextDisabled} onClick={onNext} />
      </section>
    </section>
  );
}

const DefaultPrevButton = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={disabled ? 'opacity-50 cursor-not-allowed' : ''}
    aria-label='Previous'
  >
    <LeftArrow />
  </button>
);

const DefaultNextButton = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={disabled ? 'opacity-50 cursor-not-allowed' : ''}
    aria-label='Next'
  >
    <RightArrow />
  </button>
);
