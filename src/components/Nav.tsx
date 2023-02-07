import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex justify-between px-5 py-3 bg-gray-400">
      <Link href={'/'}>Promoko</Link>
      <div className="space-x-10">
        <Link href={'/promocodes'}>Promocodes</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>
    </nav>
  );
}