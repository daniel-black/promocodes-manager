import { LayoutProps } from "@/app/layout";
import { PromocodesSidebar } from "@/components/PromocodesSidebar";

export default function PromocodesLayout({ children }: LayoutProps) {
  return (
    <div className="flex justify-between">
      {children}
      <PromocodesSidebar />
    </div>
  );
}