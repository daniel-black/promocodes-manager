import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 bg-gray-400 h-[6vh]">
      <Link href={'/'}>Promoko</Link>
      <div className="space-x-10">
        <Link href={'/promocodes'}>Promocodes</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>
    </nav>
  );
}