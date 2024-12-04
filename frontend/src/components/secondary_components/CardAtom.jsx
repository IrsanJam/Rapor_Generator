import { Card, CardBody } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';
import useData from '../../hooks/useData';

export default function CardAtom({ name, id, paramsId }) {
  const { deleteData } = useData(id);

  const handleDeleteData = () => {
    deleteData(paramsId);
  };

  return (
    <Card className="mb-4">
      <CardBody className="p-4 text-zinc-900 rounded-md">
        <div className="flex justify-between px-20 items-center">
          <div>{name}</div>
          <div>
            <Trash2 className="hover:cursor-pointer text-red-500" onClick={handleDeleteData} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
