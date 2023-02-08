import { mockPromocodes } from "@/data";
import Link from "next/link";

export default function PromocodePage({ params }: {
  params: { code: string }
}) {
  const { code } = params
  const pc = mockPromocodes.find(pc => pc.code === code);

  return (
    <div>
      <Link href={'/promocodes'}>← Promocodes</Link>
      <p>promocode page</p>
      <p>{pc?.code}</p>
      <pre>{JSON.stringify(pc, null, 2)}</pre>
    </div>
  );
}