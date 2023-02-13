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
    <thead className="bg-gray-500 text-gray-400">
      <tr>
        <th className="py-3 pl-10 rounded-tl-xl text-left"></th>
        <th className="py-3 text-left">CODE</th>
        <th className="py-3">DISCOUNT</th>
        <th className="py-3">STATUS</th>
        <th className="py-3">START</th>
        <th className="py-3 rounded-tr-xl">END</th>
      </tr>
    </thead>
  );
}

type TableBodyProps = {
  promocodes: Promocode[];
};

function TableBody({ promocodes }: TableBodyProps) {
  return (
    <tbody className="bg-gray-400">
      {promocodes.length > 0 ? (
        promocodes.map(p =>
          <tr key={p.code} className='hover:bg-gray-300 duration-75 transition-all ease-linear'>
            <td className="w-14">
              <div className="flex justify-center">
                <OptionsButton code={p.code} id={p.id} />
              </div>
            </td>
            <td className="py-3 font-mono text-gray-800 text-left">
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
            <td className="text-gray-600">
              <div className="flex justify-center">
                {dateFormatter.format(new Date(p.start))}
              </div>
            </td>
            <td className="text-gray-600">
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
          <td colSpan={6} className='py-9 text-center text-lg text-gray-700'>
            Try creating a New Promocode!
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
          colSpan={6}
          className='rounded-b-xl py-3 bg-gray-200 hover:bg-gray-50 duration-75 transition-all'
        >
          <Link
            href={'/promocodes/new'}
          >
            <div>+ New</div>
          </Link>
        </th>
      </tr>
    </tfoot>
  );
}