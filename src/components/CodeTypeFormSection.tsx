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
    <section className="space-y-1">
      <label className="block text-gray-500">Discount Type</label>
      <div className="text-lg rounded w-full flex space-x-2">
        <button
          onClick={() => setCodeType('amount')}
          disabled={codeType === 'amount'}
          className={`cursor-pointer w-1/2 rounded py-2 ring-1 ${codeType === 'amount' ? 'bg-violet-300 text-violet-700 ring-violet-500 shadow' : 'bg-gray-200 ring-gray-300 brightness-95 shadow-inner text-gray-400'} transition-all duration-75 ease-in-out`}
        >
          $ Amount
        </button>
        <button
          onClick={() => setCodeType('percent')}
          disabled={codeType === 'percent'}
          className={`cursor-pointer w-1/2 rounded py-2 ring-1 ${codeType === 'percent' ? 'bg-sky-300 text-sky-700 ring-sky-500 shadow' : 'bg-gray-200 ring-gray-300 brightness-95 shadow-inner text-gray-400'} transition-all duration-75 ease-in-out`}
        >
          % Percent
        </button>
      </div>
    </section>
  );
}