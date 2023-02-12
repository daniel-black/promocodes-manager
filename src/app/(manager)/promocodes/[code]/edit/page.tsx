import { EditForm } from "@/components/EditForm";
import { getBaseURL } from "@/utils/url";

export default async function EditPromocodePage({ params }: {
  params: { code: string }
}) {
  const { code } = params

  const promocodesResponse = await fetch(`${getBaseURL()}/api/promocodes`, {
    cache: 'no-store'
  });
  const promocodes = await promocodesResponse.json();
  const promocode = promocodes.find(pc => pc.code === code);
  
  return (
    <EditForm {...promocode} />
  );
}