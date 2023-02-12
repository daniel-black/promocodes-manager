import { CodeType } from "@/types";

type DiscountDetailsProps = {
  codeType: CodeType;
  discount: number;
  maxDiscount?: number;
};

export function DiscountDetails({
  codeType,
  discount,
  maxDiscount
}: DiscountDetailsProps) {
  const isPercent = codeType === 'percent';
  const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="flex space-x-3">
      <div className="bg-emerald-300 rounded-lg w-fit p-10 shadow relative border-2 border-emerald-500">
        <span className="absolute top-1 left-2 text-emerald-600">Discount</span>
        <p>
          <span className="text-4xl text-emerald-700 italic">{isPercent ? `${discount}%` : f.format(discount)}</span>{' '}
          <span className="text-base text-emerald-600">OFF</span>
        </p>
      </div>
      {isPercent && maxDiscount &&
        <div className="bg-amber-300 rounded-lg w-fit p-10 shadow relative border-2 border-amber-500">
          <span className="absolute top-1 left-2 text-amber-600">Up to</span>
          <p>
            <span className="text-4xl text-amber-700 italic">{f.format(maxDiscount)}</span>{' '}
            <span className="text-base text-amber-600">TOTAL SAVINGS</span>
          </p>
        </div>
      }
    </div>
  );
}