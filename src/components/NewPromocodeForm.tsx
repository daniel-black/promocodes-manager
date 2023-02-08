'use client';

import { FormEvent, useState } from "react";
import { CodeType } from "@/types";
import { CodeNameFormSection } from "./CodeNameFormSection";
import { CodeTypeFormSection } from "./CodeTypeFormSection";
import { DiscountDetailsFormSection } from "./DiscountDetailsFormSection";
import { StartFormSection } from "./StartFormSection";
import { EndFormSection } from "./EndFormSection";

export const NewPromocodeForm = () => {
  const [code, setCode] = useState('');
  const [codeType, setCodeType] = useState<CodeType>('amount');
  const [amountDiscount, setAmountDiscount] = useState(10);
  const [percentDiscount, setPercentDiscount] = useState(10);
  const [maxDiscount, setMaxDiscount] = useState<number | undefined>();
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ code, codeType, amountDiscount, percentDiscount, maxDiscount, startDate, endDate });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <div className="space-y-6">
          <CodeNameFormSection
            code={code}
            setCode={setCode}
          />
          <CodeTypeFormSection
            codeType={codeType}
            setCodeType={setCodeType}
          />
        </div>
        <div>
          <DiscountDetailsFormSection
            codeType={codeType}
            amountDiscount={amountDiscount}
            setAmountDiscount={setAmountDiscount}
            percentDiscount={percentDiscount}
            setPercentDiscount={setPercentDiscount}
            maxDiscount={maxDiscount}
            setMaxDiscount={setMaxDiscount}
          />
        </div>
        <div>
          <StartFormSection
            startDate={startDate}
            setStartDate={setStartDate}
          />
        </div>
        <div>
          <EndFormSection
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
      <input
        type="submit"
        value={'Create'}
        className='mt-9 px-3 py-2 text-lg bg-emerald-300 text-emerald-700 rounded w-full cursor-pointer'
      />
    </form>
  );
}
