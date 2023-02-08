'use client';

type CodeNameFormSectionProps = {
  code: string;
  setCode: (code: string) => void;
};

export const CodeNameFormSection = ({
  code,
  setCode,
}: CodeNameFormSectionProps) => {
  return (
    <section className="space-y-1">
      <label className="block text-gray-500">
        Code
      </label>
      <input
        type="text"
        value={code.toUpperCase()}
        onChange={e => setCode(e.target.value.toUpperCase())}
        placeholder={'SAVE25'}
        className='w-full text-lg rounded py-2 px-4 font-mono bg-gray-50 text-gray-600 shadow outline-none focus:ring-1'
        required
      />
    </section>
  );
}