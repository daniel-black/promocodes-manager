'use client';

import type { CodeType } from "@/types";
import type { Dispatch, SetStateAction } from "react";

type DiscountDetailsFormSectionProps = {
  codeType: CodeType;
  discount: number;
  maxDiscount: number | undefined;
  setDiscount: Dispatch<SetStateAction<number>>;
  setMaxDiscount: Dispatch<SetStateAction<number | undefined>>;
};

export const DiscountDetailsFormSection = ({
  codeType,
  discount,
  maxDiscount,
  setDiscount,
  setMaxDiscount
}: DiscountDetailsFormSectionProps) => {
  return (
    <section>
      <h3 className="capitalize">Discount {codeType}</h3>
      {codeType === 'amount' ? (
        <div>
          amount
          <label htmlFor="fd">Amount</label>
        </div>
      ) : (
        <div>
          percent
        </div>
      )}
    </section>
  );
}