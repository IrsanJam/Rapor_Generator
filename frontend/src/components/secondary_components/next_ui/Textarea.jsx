import { Textarea } from '@nextui-org/react';

export default function TextArea() {
  return (
    <Textarea
      isRequired
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
    />
  );
}
