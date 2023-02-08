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
      <h3>Discount {codeType}</h3>
    </section>
  );
}