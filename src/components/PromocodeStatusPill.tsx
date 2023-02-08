import { Status } from "@/types";

export function PromocodeStatusPill({ status }: { status: Status }) {
  let pillStyle = 'flex justify-center items-center w-16 py-1 rounded-full text-xs text-center border capitalize';
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
  }

  return (
    <span className={pillStyle}>
      {/* {icon}&nbsp; */}
      {status}
    </span>
  );
}