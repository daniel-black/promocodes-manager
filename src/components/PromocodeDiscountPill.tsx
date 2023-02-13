import { CodeType } from "@/types";

type PromocodeDiscountPillProps = {
  codeType: CodeType;
  discount: number;
}

export function PromocodeDiscountPill({ codeType, discount }: PromocodeDiscountPillProps) {
  const isAmount = codeType === 'amount';

  const pillStyle = 
    `flex justify-center items-center w-12 py-1
    rounded-full text-xs text-center font-mono
    ${isAmount
      ? 'bg-green-100 text-green-600' 
      : 'bg-blue-100 text-blue-600'
    }`;

  const displayText = isAmount
    ? `$${discount}`
    : `${discount}%`;

  return (
    <span className={pillStyle}>
      {displayText}
    </span>
  );
}