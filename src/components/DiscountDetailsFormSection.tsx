'use client';

import type { CodeType } from "@/types";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type DiscountDetailsFormSectionProps = {
  codeType: CodeType;
  amountDiscount: number;
  percentDiscount: number;
  maxDiscount: number | undefined;
  setAmountDiscount: Dispatch<SetStateAction<number>>;
  setPercentDiscount: Dispatch<SetStateAction<number>>;
  setMaxDiscount: Dispatch<SetStateAction<number | undefined>>;
};

export const DiscountDetailsFormSection = ({
  codeType,
  amountDiscount,
  percentDiscount,
  maxDiscount,
  setAmountDiscount,
  setPercentDiscount,
  setMaxDiscount
}: DiscountDetailsFormSectionProps) => {
  const isPercent = codeType === 'percent';

  const handlePercentChange = (discount: number) => {
    if (discount >= 0 && discount <= 100)
      setPercentDiscount(discount);
  }

  const handleAmountChange = (discount: number) => {
    if (discount >= 0 && discount <= 10000)
      setAmountDiscount(discount);
  }

  const handleDiscountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const discount = parseInt(e.target.value);
    isPercent
      ? handlePercentChange(discount)
      : handleAmountChange(discount);
  }

  const handleMaxDiscountAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maxDiscount = parseInt(e.target.value);
    if (maxDiscount >= 0 && maxDiscount <= 10000)
      setMaxDiscount(maxDiscount);
  }

  return (
    <section className="text-gray-500">
      <div className="relative">
        <label className="block capitalize mb-1">Discount {codeType}</label>
        <span className={`absolute top-9 text-lg text-gray-400 flex items-center ${isPercent ? 'left-12' : 'left-4'}`}>{isPercent ? '%' : '$'}</span>
        <input
          type="number"
          min={0}
          max={isPercent ? 100 : 10000}
          value={isPercent ? percentDiscount : amountDiscount}
          onChange={handleDiscountChange}
          className={`block text-lg w-full rounded py-2 px-4 bg-gray-50 text-gray-600 shadow outline-none focus:ring-1 text-left ${isPercent ? '' : 'pl-8'}`}
        />
      </div>
      {isPercent &&
        <div className="mt-6 relative">
          <label className="block capitalize mb-1">Maximum Discount Amount</label>
          <span className={`absolute top-9 text-lg text-gray-400 flex items-center left-4`}>$</span>
          <input
            type="number"
            min={0}
            max={10000}
            value={maxDiscount}
            onChange={handleMaxDiscountAmountChange}
            className={`block text-lg w-full rounded py-2 pr-4 pl-8 bg-gray-50 text-gray-600 shadow outline-none focus:ring-1 text-left`}
          />
        </div>
      }
    </section>
  );
}