import { LayoutProps } from "@/app/layout";

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div>
      <p>dashboard layout</p>
      {children}
    </div>
  );
}