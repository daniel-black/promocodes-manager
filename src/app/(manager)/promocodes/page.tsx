import { mockPromocodes } from "@/data";
import Link from "next/link";

export default function PromocodesPage() {
  return (
    <div className="flex justify-center">
      <table className="bg-gray-400 table-auto border-collapse rounded-lg">
        <thead>
          <tr className="border-b border-gray-500">
            <th className="px-20 py-3">Code</th>
            <th className="px-20 py-3">Status</th>
            <th className="px-20 py-3">Type</th>
            <th className="px-20 py-3">Discount</th>
            <th className="px-20 py-3">Times Applied</th>
          </tr>
        </thead>
        <tbody>
          {mockPromocodes.map(p => 
            <tr key={p.code} className='text-left hover:bg-gray-500'>
              <td className="px-20 py-3">
                <Link href={`/promocodes/${p.code}`} className='hover:underline'>
                  {p.code}
                </Link>
              </td>
              <td className="px-20 py-3">{p.status}</td>
              <td className="px-20 py-3">{p.codeType}</td>
              <td className="px-20 py-3 text-right">{p.discount}</td>
              <td className="px-20 py-3 text-right">{Math.round(Math.random() * 1000)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}