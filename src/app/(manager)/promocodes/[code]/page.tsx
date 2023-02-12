import { DateRange } from "@/components/DateRange";
import { mockPromocodes } from "@/data";
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

  const promocode: Promocode = promocodes.find(pc => pc.code === code);
  const otherPromocodes = promocodes.filter(pc => pc.code !== code);

  return (
    <div>
      <Link href={'/promocodes'}>← Promocodes</Link>

      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-mono text-gray-700">{promocode?.code}</h1>
        <span className={`flex justify-center items-center text-2xl w-10 h-10 rounded-lg bg-gray-400 text-gray-600 border border-gray-500 shadow`}>
          {promocode.codeType === 'amount' ? '$' : '%'}
        </span>
      </div>
      <DateRange
        start={promocode.start}
        end={promocode.end}
      />

      <pre>{JSON.stringify(promocode, null, 2)}</pre>
    </div>
  );
}

