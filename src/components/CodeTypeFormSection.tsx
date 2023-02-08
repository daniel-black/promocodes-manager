'use client';

import { CodeType } from "@/types";

type CodeTypeFormSectionProps = {
  codeType: CodeType;
  setCodeType: (codeType: CodeType) => void;
};

export const CodeTypeFormSection = ({
  codeType,
  setCodeType,
}: CodeTypeFormSectionProps) => {

  return (
    <section>
      <label className="block">Type</label>
      <div className="p-1 rounded-lg space-x-1 bg-gray-400 w-fit">
        <button
          onClick={() => setCodeType('amount')}
          disabled={codeType === 'amount'}
          className={`cursor-pointer w-24 bg-slate-100 rounded py-1 ${codeType === 'amount' ? 'bg-sky-300' : ''}`}
        >
          Amount
        </button>
        <button
          onClick={() => setCodeType('percent')}
          disabled={codeType === 'percent'}
          className={`cursor-pointer w-24 bg-slate-100 rounded py-1 ${codeType === 'percent' ? 'bg-sky-300' : ''}`}
        >
          Percent
        </button>
      </div>
    </section>
  );
}