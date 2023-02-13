import { Status } from "@/types";

type StatusPillProps = {
  status: Status;
  big?: boolean;
};

export function StatusPill({ status, big = false }: StatusPillProps) {
  let pillStyle = 'flex justify-center items-center rounded-full text-center capitalize';
  pillStyle += big 
    ? ' px-4 py-2 text-xl'
    : ' w-16 py-1 text-xs';

  switch (status) {
    case 'active':
      pillStyle += ' bg-green-800 text-green-400';
      break;
    case 'paused':
      pillStyle += ' bg-orange-800 text-orange-400';
      break;
    case 'disabled':
      pillStyle += ' bg-stone-900 text-stone-400';
      break;
    case 'inactive':
      pillStyle += ' bg-gray-700 text-gray-300';
      break;
  }

  return (
    <div className={pillStyle}>
      {status}
    </div>
  );
}