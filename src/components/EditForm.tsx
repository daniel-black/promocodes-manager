'use client';

import { CodeType } from "@/types";
import { getBaseURL } from "@/utils/url";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

type EditFormProps = {
  id: number;
  code: string;
  codeType: CodeType;
  discount: number;
  maxDiscount?: number;
  start: string;
  end?: string;
};

export const EditForm = ({
  id,
  code,
  codeType,
  discount,
  maxDiscount,
  start,
  end,
}: EditFormProps) => {
  // Can't edit codeType
  const [newCode, setNewCode] = useState(code);
  const [newDiscount, setNewDiscount] = useState(discount);
  const [newMaxDiscount, setNewMaxDiscount] = useState(maxDiscount);
  const [newStart, setNewStart] = useState(start.split('T')[0]);
  const [newEnd, setNewEnd] = useState(end?.split('T')[0]);

  const [showMaxDiscount, setShowMaxDiscount] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const router = useRouter();

  const isPercent = codeType === 'percent';

  const numOutsideOfRange = (n: number) => (n < 0 || n > 10000);

  function handleDiscountChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.valueAsNumber;
    if (numOutsideOfRange(val) || (isPercent && val > 100)) return;
    setNewDiscount(val);
  }

  function handleMaxDiscountChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.valueAsNumber;
    if (numOutsideOfRange(val)) return;
    setNewMaxDiscount(val);
  }

  function handleAddMaxDiscount() {
    setNewMaxDiscount(100);
    setShowMaxDiscount(true);
  }

  function handleDeleteMaxDiscount() {
    setShowMaxDiscount(false);
    setNewMaxDiscount(undefined);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setIsSaving(true);
    e.preventDefault();

    const body = JSON.stringify({
      id,
      code: newCode,
      discount: newDiscount,
      maxDiscount: newMaxDiscount, 
      startDate: newStart,
      endDate: newEnd
    });

    try {
      const result = await fetch(`${getBaseURL()}/api/promocodes`, {
        method: 'PATCH',
        body
      });
      if (!result.ok)
        throw new Error(JSON.stringify({ code: result.status, statusText: result.statusText }));

      setIsSaving(false);
      router.replace(`/promocodes/${newCode}`);
    } catch(e) {
      setIsSaving(false);
      throw new Error(JSON.stringify(e));
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block">Code</label>
          <input
            type="text"
            value={newCode.toUpperCase()}
            onChange={e => setNewCode(e.target.value.toUpperCase())}
            pattern="^[A-Z0-9]+$"
            disabled={isSaving}   
          />
        </div>

        <div>
          <label className="block capitalize">Discount {codeType}</label>
          <input
            type="number"
            min={0}
            max={isPercent ? 100 : 10000}
            value={newDiscount}
            onChange={handleDiscountChange}   
            disabled={isSaving}     
          />
        </div>

        <div>
          {isPercent && (maxDiscount || showMaxDiscount ? (
            <>
              <label className="block capitalize">Maximum Discount Amount</label>
              <input
                type="number"
                min={0}
                max={10000}
                value={newMaxDiscount}
                onChange={handleMaxDiscountChange}
                disabled={isSaving}   
              />
              <button
                onClick={handleDeleteMaxDiscount}
                className="block"
                disabled={isSaving}
              >
                Delete Max
              </button>
            </>
          ) : (
            <button
              onClick={handleAddMaxDiscount}
              disabled={isSaving}
            >
              Add a Maxium Discount
            </button>
          ))}
        </div>

        <div>
          <label className="block">Start Date</label>
          <input
            type="date"
            value={newStart}
            onChange={e => setNewStart(e.target.value)}
            disabled={isSaving}
          />
        </div>

        <div>
          <label className="block">End Date</label>
          <input
            type="date"
            value={newEnd}
            min={newStart}
            onChange={e => setNewEnd(e.target.value)}
            disabled={isSaving}
          />
        </div>

        <input
          type="submit"
          value={isSaving ? 'Saving' : 'Save Changes'}
          className='bg-emerald-400 mt-6 text-emerald-800 rounded p-2 cursor-pointer'
          disabled={isSaving}
        />
      </form>
    </div>
  );
}