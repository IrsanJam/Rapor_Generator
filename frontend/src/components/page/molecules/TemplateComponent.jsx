import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import CardAtom from '../../atom/CardAtom';
import ModalComponents from '../../atom/Modal';

const TemplateComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full min-h-[90vh] max-h-[90vh] p-4 bg-white overflow-y-scroll">
      <div className="flex justify-end items-center mb-3">
        <button
          onClick={handleOpenModal}
          className="px-6 py-2 bg-zinc-900 flex justify-center items-center gap-4 text-white font-semibold rounded-md hover:bg-gray-300"
        >
          <Plus />
          Add
        </button>
      </div>

      {Array.from({ length: 3 }).map((_, index) => (
        <CardAtom />
      ))}

      {isModalOpen && <ModalComponents onClose={handleCloseModal} />}
    </div>
  );
};

export default TemplateComponent;
