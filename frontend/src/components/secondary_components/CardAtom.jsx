import { Card, CardBody } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';
import useData from '../../hooks/useData';
import { Puzzle } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function CardAtom({ name, id, paramsId, deleteData }) {
  const handleDeleteData = (e) => {
    e.stopPropagation();
    deleteData(id);
  };

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Card style={style} className="mb-4">
      <CardBody className="p-4 text-zinc-900 rounded-md">
        <div className="flex justify-between px-20 items-center">
          <div ref={setNodeRef} {...attributes} {...listeners} className="flex gap-3">
            <Puzzle /> {name}
          </div>
        </div>
      </CardBody>
      <div>
        <Trash2
          className="hover:cursor-pointer absolute top-5 right-5 text-red-500"
          onClick={handleDeleteData}
        />
      </div>
    </Card>
  );
}
