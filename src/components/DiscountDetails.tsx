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
    <p className="text-3xl text-gray-600">
      <span className="text-bg text-gray-700">
        {isPercent
          ? `${discount}%`
          : f.format(discount)
        }
      </span>
      <span> off </span>
      {isPercent && maxDiscount &&
        <span>
          up to <span className="text-gray-700">{f.format(maxDiscount)}</span>
        </span>
      }
    </p>
  );
}