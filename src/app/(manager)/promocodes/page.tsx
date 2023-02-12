import { OptionsButton } from "@/components/OptionsButton";
import { PromocodeDiscountPill } from "@/components/PromocodeDiscountPill";
import { StatusPill } from "@/components/StatusPill";

import { Promocode } from "@/types";
import { getBaseURL } from "@/utils/url";
import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short'
});

export default async function PromocodesPage() {
  const promocodesResponse = await fetch(`${getBaseURL()}/api/promocodes`, {
    cache: 'no-store'
  });
  const promocodes = await promocodesResponse.json() as Promocode[];

  return (
    <table className="w-full mb-10">
      <TableHeader />
      <TableBody promocodes={promocodes} />
      <TableFooter />
    </table>
  );
}

function TableHeader() {
  return (
    <thead className="bg-gray-400 text-gray-700">
      <tr>
        <th className="py-3 pl-10 rounded-tl-xl text-left">Code</th>
        <th className="py-3">Discount</th>
        <th className="py-3">Status</th>
        <th className="py-3">Start</th>
        <th className="py-3 rounded-tr-xl">End</th>
      </tr>
    </thead>
  );
}

type TableBodyProps = {
  promocodes: Promocode[];
};

function TableBody({ promocodes }: TableBodyProps) {
  return (
    <tbody className="bg-gray-200 max-h-[50vh] overflow-scroll">
      {promocodes.length > 0 ? (
        promocodes.map(p =>
          <tr key={p.code} className='hover:bg-gray-300 duration-75 transition-all ease-linear'>
            <td className="pl-10 py-3 font-mono text-gray-700">
              <Link
                href={`/promocodes/${p.code}`}
                className='hover:underline'
              >
                {p.code}
              </Link>
            </td>
            <td className="py-3">
              <div className="flex justify-center">
                <PromocodeDiscountPill codeType={p.codeType} discount={p.discount} />
              </div>
            </td>
            <td className="py-3">
              <div className="flex justify-center">
                <StatusPill status={p.status} />
              </div>
            </td>
            <td className="text-gray-500">
              <div className="flex justify-center">
                {dateFormatter.format(new Date(p.start))}
              </div>
            </td>
            <td className="text-gray-500">
              <div className="flex justify-center">
              {p.end 
                ? dateFormatter.format(new Date(p.end))
                : '-'
              }
              </div>
            </td>
          </tr>  
        )
      ) : (
        <tr>
          <td colSpan={5}>
            Try creating a New Promocode
          </td>
        </tr>
      )}
    </tbody>
  );
}

function TableFooter() {
  return (
    <tfoot className="rounded-b-xl">
      <tr>
        <th
          colSpan={5}
          className='py-3 bg-emerald-200 rounded-b-xl'
        >
          <Link
            href={'/promocodes/new'}
          >
            + New
          </Link>
        </th>
      </tr>
    </tfoot>
  );
}