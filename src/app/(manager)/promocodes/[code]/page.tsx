import { DateRange } from "@/components/DateRange";
import { DeleteButton } from "@/components/DeleteButton";
import { DiscountDetails } from "@/components/DiscountDetails";
import { StatusPill } from "@/components/StatusPill";
import { Promocode } from "@/types";
import { getBaseURL } from "@/utils/url";
import Link from "next/link";


export default async function PromocodePage({ params }: {
  params: { code: string }
}) {
  const { code } = params

  const promocodesResponse = await fetch(`${getBaseURL()}/api/promocodes`, {
    cache: 'no-store'
  });
  const promocodes = await promocodesResponse.json();

  const promocode = promocodes.find(pc => pc.code === code);
  // const otherPromocodes = promocodes.filter(pc => pc.code !== code);

  console.log(promocode)

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full bg-gray-200 text-gray-600 py-3 rounded-t-xl shadow flex items-center px-8">
        <h1 className="text-4xl">{promocode.code}</h1>
      </div>
      <div className="w-full bg-slate-400">
        hi
      </div>
    </div>
  );

  // return (
  //   <div className="space-y-5 w-full bg-gray-200 px-8 py-6 rounded-lg shadow">
  //     <div className="flex justify-between items-center">
  //       <div className="flex justify-start items-center space-x-5">
  //         {/* <span className={`flex justify-center items-center text-4xl w-14 h-14 rounded-lg bg-gray-400 text-gray-600 border border-gray-500 shadow`}>
  //           {promocode.codeType === 'amount' ? '$' : '%'}
  //         </span> */}
  //         <h1 className="text-6xl font-mono text-gray-700">{promocode?.code}</h1>
  //       </div>
  //       <StatusPill status={promocode.status} big={true} />
  //     </div>
  //     <div className="w-64 text-gray-500">
  //       <div className="flex justify-between items-baseline">
  //         <span className="text-sm">Created</span><span>{new Date(promocode.createdAt).toLocaleString()}</span>
  //       </div>
  //       <div className="flex justify-between items-baseline">
  //         <span className="text-sm">Updated</span><span>{new Date(promocode.updatedAt).toLocaleString()}</span>
  //       </div>
  //     </div>
  //     <DateRange
  //       start={promocode.start}
  //       end={promocode.end}
  //     />
  //     <DiscountDetails
  //       codeType={promocode.codeType}
  //       discount={promocode.discount}
  //       maxDiscount={promocode.maxDiscount}
  //     />
  //     <div className="flex space-x-2">
  //       <Link
  //         href={`/promocodes/${code}/edit`}
  //         className='bg-cyan-300 text-cyan-800 rounded border border-cyan-500 shadow-sm px-3 py-1'
  //       >
  //         Edit
  //       </Link>
  //       <DeleteButton id={promocode.id} />
  //     </div>
  //   </div>
  // );
} 
