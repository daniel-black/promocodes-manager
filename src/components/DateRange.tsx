type DateRangeProps = {
  start: string;
  end?: string;
};

export function DateRange({ start, end }: DateRangeProps) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium'
  });

  const startText = formatter.format(new Date(start));
  const endText = end
    ? formatter.format(new Date(end))
    : 'open';

  return (
    <div>
      <div className="flex justify-between text-gray-600">
        <p>Start</p>
        <p>End</p>
      </div>
      <div className="flex flex-nowrap justify-between items-center space-x-2 text-gray-600">
        <div>
          <p className="whitespace-nowrap">{startText}</p>
        </div>
        <div className="h-[2px] bg-gray-400 flex-grow w-full rounded-full" />
        <div>
          <p className="whitespace-nowrap">{endText}</p>
        </div>
      </div>
    </div>
  );
}