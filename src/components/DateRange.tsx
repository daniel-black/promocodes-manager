import { ThreeDots } from "./Icons";

export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium'
});

type DateRangeProps = {
  start: string;
  end?: string;
};

export function DateRange({ start, end }: DateRangeProps) {
  const startText = dateFormatter.format(new Date(start));
  const endText = end
    ? dateFormatter.format(new Date(end))
    : <ThreeDots />;

  return (
    <div className="text-lg">
      {end &&
        <div className="text-center text-gray-600">
          <span>{getDaysBetween(start, end)} day window</span>
        </div>
      }
      <div className="flex flex-nowrap justify-between items-center text-gray-600">
        <div className="border-2 border-gray-400 px-6 py-1 rounded-full text-center">
          <p className="text-sm text-gray-500">Start</p>
          <p className="whitespace-nowrap">{startText}</p>
        </div>

        <div className="h-[2px] bg-gray-400 flex-grow w-full" />

        <div className="border-2 border-gray-400 px-6 py-1 rounded-full text-center">
          <p className="text-sm text-gray-500">End</p>
          <p className="whitespace-nowrap">{endText}</p>
        </div>
      </div>
    </div>
  );
}

function getDaysBetween(start: string, end: string) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffTime = Math.abs(new Date(end).getTime() - new Date(start).getTime());
  return Math.ceil(diffTime / oneDay);
}