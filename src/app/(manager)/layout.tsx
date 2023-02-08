import { Nav } from "@/components/Nav";
import { LayoutProps } from "../layout";

export default function ManagerLayout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      <main className="h-[94vh]">
        <div className="flex justify-center w-full h-full py-[5vh] px-5">
          {children}
        </div>
      </main>
    </div>
  );
}