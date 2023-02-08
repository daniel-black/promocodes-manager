'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import { CodeType } from "@/types";
import { CodeNameFormSection } from "./CodeNameFormSection";
import { CodeTypeFormSection } from "./CodeTypeFormSection";
import { DiscountDetailsFormSection } from "./DiscountDetailsFormSection";

export const NewPromocodeForm = () => {
  const [code, setCode] = useState('');
  const [codeType, setCodeType] = useState<CodeType>('amount');
  const [discount, setDiscount] = useState(10);
  const [maxDiscount, setMaxDiscount] = useState<number | undefined>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ code, codeType });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CodeNameFormSection
        code={code}
        setCode={setCode}
      />
      <CodeTypeFormSection
        codeType={codeType}
        setCodeType={setCodeType}
      />
      <DiscountDetailsFormSection
        codeType={codeType}
        discount={discount}
        setDiscount={setDiscount}
        maxDiscount={maxDiscount}
        setMaxDiscount={setMaxDiscount}
      />
      <input
        type="submit"
        value={'Create'}
        className='px-3 py-2 bg-emerald-300 rounded-lg'
      />
    </form>
  );
}

type DiscountInputProps = {
  codeType: CodeType;
  discount: number;
  setDiscount: (e: ChangeEvent<HTMLInputElement>) => void;
};

function DiscountInput({ codeType, discount, setDiscount }: DiscountInputProps) {
  const isPercent = codeType === 'percent';
  return (
    <div className="relative">
      <span className="absolute top-1 left-3">{isPercent ? '%' : '$'}</span>
      <input
        min={0}
        max={isPercent ? 100 : 10000}
        type="number"
        value={discount}
        onChange={setDiscount}
        className='text-right py-1 w-24'
      />
    </div>
  );
}