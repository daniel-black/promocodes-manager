import { BreadCrumbs } from "@/components/BreadCrumbs";
import { Nav } from "@/components/Nav";
import { LayoutProps } from "../layout";

export default function ManagerLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <Nav />
      <main className="mt-10 w-5/6">
        <BreadCrumbs />
        {children}
      </main>
    </div>
  );
}