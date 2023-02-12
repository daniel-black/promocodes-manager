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
    <div>
      {showOptions ? (
        <div className="flex">
          <Link
            href={`/promocodes/${code}/edit`}
            className='scale-[80%] text-sky-400'
          >
            <Edit />
          </Link>
          <button
            onClick={handleDelete}
            className="scale-[80%] text-rose-500"
            disabled={isDeleting}
          >
            <Delete />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowOptions(true)}
          className="text-gray-500 scale-[80%] flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-400 hover:shadow-sm"
        >
          <ThreeDots />
        </button>
      )}
    </div>
  );
}