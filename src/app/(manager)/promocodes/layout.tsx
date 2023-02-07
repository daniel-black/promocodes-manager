import { LayoutProps } from "@/app/layout";
import { PromocodesSidebar } from "@/components/PromocodesSidebar";

export default function PromocodesLayout({ children }: LayoutProps) {
  return (
    <div className="flex py-10">
      <PromocodesSidebar />
      {children}
    </div>
  );
}