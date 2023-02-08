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
    <section>
      <label className="block">Code</label>
      <input
        type="text"
        value={code.toUpperCase()}
        onChange={e => setCode(e.target.value.toUpperCase())}
        placeholder={'SAVE25'}
        required
      />
    </section>
  );
}