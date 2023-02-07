export default function PromocodePage({ params }: {
  params: { code: string }
}) {
  const { code } = params

  return (
    <div>
      promocode page
      <p>{code}</p>
    </div>
  );
}