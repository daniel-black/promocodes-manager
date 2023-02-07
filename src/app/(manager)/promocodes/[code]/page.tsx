import Link from "next/link";

export default function PromocodePage({ params }: {
  params: { code: string }
}) {
  const { code } = params

  return (
    <div>
      <Link href={'/promocodes'}>← Promocodes</Link>
      <p>promocode page</p>
      <p>{code}</p>
    </div>
  );
}