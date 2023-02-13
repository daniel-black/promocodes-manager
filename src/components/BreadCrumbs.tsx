'use client';

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export const BreadCrumbs = () => {
  const segments = useSelectedLayoutSegments();

  if (segments.length === 1) return null;

  return (
    <div className="flex space-x-4 text-gray-900 mb-10 select-none">
      {segments.map((segment, i) =>
        <div key={i} className='space-x-4'>
          {i > 0 && <span className="text-gray-800">/</span>}
          <Link
            href={buildHref(segments, i)}
            className={`capitalize hover:underline`}
          >
            {segment}
          </Link>
        </div>  
      )}
    </div>
  );
}

function buildHref(segments: string[], index: number) {
  let href = '';
  for (let i = 0; i <= index; i++) {
    href += `/${segments[i]}`;
  }
  return href;
}