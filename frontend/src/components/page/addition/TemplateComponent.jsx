import React from 'react';
import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import CardAtom from '../../secondary_components/CardAtom';
import ModalComponent from '../../secondary_components/Modal';
import useData from '../../../hooks/useData';
import NoItem from '../../secondary_components/third_components/NoItem';
import Loading from '../../secondary_components/third_components/Loading';

const TemplateComponent = ({ id }) => {
  const { data, loading } = useData(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    data &&
    (!loading ? (
      <div className="flex bg-white h-screen justify-center items-start pt-[20vh]">
        <Loading />
      </div>
    ) : (
      <div className="w-full min-h-[90vh] p-4 h-auto bg-white overflow-y-scroll">
        <div className="flex justify-end items-center mb-3">
          <button
            onClick={handleOpenModal}
            className="px-6 py-2 bg-zinc-900 flex justify-center items-center gap-4 text-white font-semibold rounded-md hover:bg-gray-300"
          >
            <CirclePlus />
            Add
          </button>
        </div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <CardAtom paramsId={item.id} id={id} name={item.key} key={index} />
          ))
        ) : (
          <NoItem onCreateTemplateClick={handleOpenModal} />
        )}

        {isModalOpen && <ModalComponent id={id} onClose={handleCloseModal} />}
      </div>
    ))
  );
};

export default TemplateComponent;
