import { Card, CardBody } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Puzzle } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FilePenLine } from 'lucide-react';
import ModalComponent from './Modal';

export default function CardAtom({ name, id, paramsId, deleteData, formData, parentId }) {
  const [showModal, setShowModal] = useState(false);
  const [formEdit, setEdit] = useState(formData);
  const handleDeleteData = (e) => {
    e.stopPropagation();
    deleteData(id);
  };

  const handleShowPopup = () => {
    setShowModal((prev) => !prev);
  };

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <Card style={style} className="mb-4">
        <CardBody className="p-4 text-zinc-900 rounded-md">
          <div className="flex justify-start px-20 items-center">
            <div ref={setNodeRef} {...attributes} {...listeners} className="flex gap-8 !w-[200px] ">
              <div>
                <Puzzle />
              </div>
              <div>{name}</div>
            </div>
          </div>
        </CardBody>
        <div>
          <FilePenLine
            className="hover:cursor-pointer absolute top-5 right-16 text-green-500"
            onClick={() => handleShowPopup()}
          />
          <Trash2
            className="hover:cursor-pointer absolute top-5 right-5 text-red-500"
            onClick={handleDeleteData}
          />
        </div>
        {showModal && (
          <ModalComponent
            formEdit={formEdit}
            onClose={handleShowPopup}
            edit={true}
            parentId={parentId}
            id={id}
          />
        )}
      </Card>
    </>
  );
}
