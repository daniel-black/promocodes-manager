import { Dispatch, SetStateAction } from "react";

type EndFormSectionProps = {
  startDate: string | undefined;
  endDate: string | undefined;
  setEndDate: Dispatch<SetStateAction<string | undefined>>;
};

export const EndFormSection = ({
  startDate,
  endDate,
  setEndDate
}: EndFormSectionProps) => {
  return (
    <div className="text-gray-500 space-y-1">
      <label className="block">End Date</label>
      <input
        type="date"
        min={startDate ? startDate : undefined}
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        className='w-full text-lg rounded py-2 px-4 bg-gray-50 text-gray-600 shadow outline-none focus:ring-1'
      />
    </div>
  );
}