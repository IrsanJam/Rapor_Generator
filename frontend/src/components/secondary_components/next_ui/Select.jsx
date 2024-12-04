import { Select, SelectItem } from '@nextui-org/react';
import { list } from './data/select/data';
export default function SelectNext({ handleOnChange, list, label }) {
  return (
    <div className="w-full p-2 text-black  rounded-md mb-2">
      <Select name={label} onChange={handleOnChange} label={`Select ${label}`} className="w-full">
        {list.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
