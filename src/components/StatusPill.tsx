import { Status } from "@/types";

type StatusPillProps = {
  status: Status;
  big?: boolean;
};

export function StatusPill({ status, big = false }: StatusPillProps) {
  let pillStyle = 'flex justify-center items-center rounded-full text-center border capitalize';
  pillStyle += big 
    ? ' px-4 py-2 text-xl'
    : ' px-2 py-1 text-xs';
  // let icon = '';

  switch (status) {
    case 'active':
      pillStyle += ' bg-green-300 text-green-700 border-green-400';
      // icon = '▶️';
      break;
    case 'paused':
      pillStyle += ' bg-yellow-200 text-yellow-600 border-yellow-400';
      // icon = '⏸️';
      break;
    case 'disabled':
      pillStyle += ' bg-rose-200 text-rose-600 border-rose-300';
      // icon = '🚫';
      break;
    case 'inactive':
      pillStyle += ' bg-neutral-200 text-neutral-600 border-neutral-300';
      // icon = '🚫';
      break;
  }

  return (
    <div className={pillStyle}>
      {/* {icon}&nbsp; */}
      {status}
    </div>
  );
}