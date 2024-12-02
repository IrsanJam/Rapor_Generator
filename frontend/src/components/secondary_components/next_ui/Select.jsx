import { Select, SelectItem } from '@nextui-org/react';
import { list } from './data/select/data';
export default function SelectNext() {
  return (
    <div className="w-full p-2 text-black border border-gray-300 rounded-md mb-4">
      <Select label="Select a Component" className="w-full">
        {list.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
