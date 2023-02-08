'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { mockPromocodes } from '@/data';
import Link from 'next/link';

export const PromocodesSidebar = () => {
  const segments = useSelectedLayoutSegments();
  const showSidebar = segments.length === 1 && segments[0] !== 'new';

  if (!showSidebar) return null;

  const [selectedCode] = segments;
  const otherCodes = mockPromocodes.filter(pc => pc.code !== selectedCode);

  return (
    <ul className='p-3 rounded bg-gray-400 space-y-2 divide-y max-w-fit'>
      {otherCodes.map(pc =>
        <li key={pc.code}>
          <Link href={`/promocodes/${pc.code}`} className='text-blue-600 hover:underline'>
            {pc.code}
          </Link>
        </li>
      )}
    </ul>
  );
}