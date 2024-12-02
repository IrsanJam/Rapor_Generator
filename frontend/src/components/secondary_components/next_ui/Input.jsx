import { Input } from '@nextui-org/react';

export default function InputNext({ type, label, handleOnChange, formData }) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        name={label}
        value={formData[`${label}`]}
        onChange={handleOnChange}
        type={type}
        label={label}
        className="w-full p-2 text-black border border-gray-300 rounded-md mb-4"
      />
    </div>
  );
}
