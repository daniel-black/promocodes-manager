import { CodeType } from "@/types";

type PromocodeDiscountPillProps = {
  codeType: CodeType;
  discount: number;
}

export function PromocodeDiscountPill({ codeType, discount }: PromocodeDiscountPillProps) {
  const isAmount = codeType === 'amount';
  const pillStyle = `
    flex justify-center items-center w-12 py-1
    rounded-full text-xs text-center border 
    ${isAmount
      ? 'bg-violet-300 text-violet-700 border-violet-500' 
      : 'bg-sky-300 text-sky-700 border-sky-500'
    }
  `;

  const displayText = isAmount
    ? `$${discount}`
    : `${discount}%`;

  return (
    <span className={pillStyle}>
      {displayText}
    </span>
  );
}