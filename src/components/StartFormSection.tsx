'use client';

import { Dispatch, SetStateAction } from "react";

type StartFormSectionProps = {
  startDate: string | undefined;
  setStartDate: Dispatch<SetStateAction<string | undefined>>;
};

export const StartFormSection = ({
  startDate,
  setStartDate
}: StartFormSectionProps) => {
  return (
    <div className="text-gray-500 space-y-1">
      <label className="block">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className='w-full text-lg rounded py-2 px-4 bg-gray-50 text-gray-600 shadow outline-none focus:ring-1'
      />
    </div>
  );
}