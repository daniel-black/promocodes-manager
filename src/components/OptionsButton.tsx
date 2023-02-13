'use client';

import Link from "next/link";
import { getBaseURL } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Delete, Edit, ThreeDots } from "./Icons";

type OptionsButtonProps = {
  code: string;
  id: number;
};

export const OptionsButton = ({ code, id }: OptionsButtonProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const toggleOptions = () => setShowOptions(!showOptions);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await fetch(`${getBaseURL()}/api/promocodes`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });

      if (!result.ok) {
        setIsDeleting(false);
        throw new Error(JSON.stringify({ code: result.status, statusText: result.statusText }))
      }

      router.refresh();
    } catch (e) {
      setIsDeleting(false);
      console.log(e);
    }
  }

  return (
    <div className="relative">
      <button
        onClick={toggleOptions}
        className="scale-[60%] text-gray-300 flex justify-center items-center w-8 h-5   rounded-full bg-gray-500 shadow-sm"
      >
        <ThreeDots />
      </button>
      {showOptions &&
        <>
          <div className="absolute top-7 -left-4 p-3 bg-gray-200 z-10 shadow-lg rounded-lg space-y-2">
            {isDeleting ? (
              <p className="text-rose-500">Deleting...</p>
            ) : (
              <>
                <Link
                  href={`/promocodes/${code}/edit`}
                  className='text-sky-500 flex px-3 py-1 hover:bg-sky-200 rounded'
                >
                  <Edit />&nbsp;Edit
                </Link>
                <button
                  onClick={handleDelete}
                  className="text-rose-500 flex px-3 py-1 hover:bg-rose-200 rounded"
                  disabled={isDeleting}
                >
                  <Delete />&nbsp;Delete
                </button>
              </>
            )}
          </div>
          <div className="bg-gray-200 z-10 w-3 h-3 rotate-45 absolute top-6 left-[9px]"></div>
        </>
      }
    </div>
  );
}