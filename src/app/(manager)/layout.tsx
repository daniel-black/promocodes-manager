import { Nav } from "@/components/Nav";
import { LayoutProps } from "../layout";

export default function ManagerLayout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}