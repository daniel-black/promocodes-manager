import { PromocodeDiscountPill } from "@/components/PromocodeDiscountPill";
import { PromocodeStatusPill } from "@/components/PromocodeStatusPill";
import { mockPromocodes } from "@/data";
import { prisma } from "@/db";
import Link from "next/link";

export default async function PromocodesPage() {
  const promocodes = await prisma.promocode.findMany();

  return (
    <div className="overflow-auto rounded-lg bg-gray-200 shadow-lg h-[84vh]">
      <pre>{JSON.stringify(promocodes, null, 2)}</pre>
      <table className="text-left relative">
        <thead className="sticky top-0 opacity-[97%]">
          <tr className="bg-gray-100 text-gray-500">
            <th className="px-12 py-3">Code</th>
            <th className="px-12 py-3 text-center">Status</th>
            <th className="px-12 py-3 text-center">Discount</th>
            <th className="px-12 py-3">Times Applied</th>
          </tr>
        </thead>
        <tbody className="overflow-auto w-full">
          {mockPromocodes.map(p => 
            <tr key={p.code} className='text-left group hover:bg-gray-300 transition-all duration-75 ease-in-out'>
              <td className="px-12 py-3">
                <Link href={`/promocodes/${p.code}`} className='hover:underline font-mono'>
                  {p.code}
                </Link>
              </td>
              <td className="px-12 py-3">
                <PromocodeStatusPill status={p.status} />
              </td>
              <td className="px-12 py-3">
                <PromocodeDiscountPill codeType={p.codeType} discount={p.discount} />
              </td>
              <td className="px-12 py-3 text-right">{Math.round(Math.random() * 1000)}</td>
            </tr>
          )}
        </tbody>
        <tfoot className="sticky bottom-0 opacity-[97%]">
          <tr>
            <th colSpan={4} className="text-center bg-emerald-50 hover:bg-emerald-200 duration-75 ease-in-out">
              <Link href={'/promocodes/new'} className='w-full block py-3 text-emerald-700'>
                + New
              </Link>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
