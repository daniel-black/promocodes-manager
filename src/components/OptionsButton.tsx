'use client';

import { getBaseURL } from "@/utils/url";
import Link from "next/link";
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
        className="scale-[60%] text-gray-400 flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 shadow"
      >
        <ThreeDots />
      </button>
      {showOptions &&
        <div className="absolute top-7 left-1 px-4 py-3 bg-gray-50 z-10 shadow-lg rounded space-y-2">
          {isDeleting ? (
            <p className="text-rose-500">Deleting...</p>
          ) : (
            <>
              <Link
                href={`/promocodes/${code}/edit`}
                className='text-sky-400 flex'
              >
                <Edit />&nbsp;Edit
              </Link>
              <button
                onClick={handleDelete}
                className="text-rose-500 flex"
                disabled={isDeleting}
              >
                <Delete />&nbsp;Delete
              </button>
            </>
          )}
        </div>
      }
    </div>
  );
}