import { Card, CardBody } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';
import useData from '../../hooks/useData';
import { Puzzle } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function CardAtom({ name, id, paramsId }) {
  const { deleteData, fetchData } = useData(id);

  const handleDeleteData = () => {
    deleteData(paramsId);
  };

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Card ref={setNodeRef} {...attributes} {...listeners} style={style} className="mb-4">
      <CardBody className="p-4 text-zinc-900 rounded-md">
        <div className="flex justify-between px-20 items-center">
          <div className="flex gap-3">
            <Puzzle /> {name}
          </div>
          <div>
            <Trash2 className="hover:cursor-pointer text-red-500" onClick={handleDeleteData} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
