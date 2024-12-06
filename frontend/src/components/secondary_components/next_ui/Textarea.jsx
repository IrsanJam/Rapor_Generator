import { Textarea } from '@nextui-org/react';

export default function TextAreaNext({ label, handleOnChange, formData }) {
  return (
    <Textarea
      name={label}
      value={formData[label]}
      onChange={handleOnChange}
      label={label}
      placeholder={`Enter your ${label} `}
      className="max-w-full p-2 text-black"
    />
  );
}
