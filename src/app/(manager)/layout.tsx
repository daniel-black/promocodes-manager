import { BreadCrumbs } from "@/components/BreadCrumbs";
import { Nav } from "@/components/Nav";
import { LayoutProps } from "../layout";

export default function ManagerLayout({ children }: LayoutProps) {
  return (
    <div className="bg-yellow-200 h-screen flex flex-col items-center">
      <Nav />
      <main className="mt-10 w-5/6 bg-stone-400">
        <BreadCrumbs />
        <div className="flex justify-center w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
}