'use client';

import { getBaseURL } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteButtonProps = {
  id: number;
};

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

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
      router.replace('/promocodes');
    } catch (e) {
      setIsDeleting(false);
      console.log(e);
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-rose-300 text-rose-800 rounded border border-rose-500 shadow-sm px-3 py-1"
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting' : 'Delete'}
    </button>
  );
}