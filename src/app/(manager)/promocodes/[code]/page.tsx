export default function PromocodePage({ params }: {
  params: { code: string }
}) {
  return (
    <div>
      promocode page
      <p>{params.code}</p>
    </div>
  );
}