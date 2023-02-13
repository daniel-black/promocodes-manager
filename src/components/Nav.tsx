import Link from "next/link";

export const Nav = () => {
  return (
    <div className="flex justify-center w-full bg-gray-700">
      <nav className="flex justify-between items-center py-3 w-5/6 text-gray-400 text-sm sm:text-base">
        <Link href={'/'} className='font-semibold'>Promoko</Link>
        <div className="space-x-5 sm:space-x-10">
          <Link href={'/promocodes'}>Promocodes</Link>
          <Link href={'/dashboard'}>Dashboard</Link>
        </div>
      </nav>
    </div>
  );
}