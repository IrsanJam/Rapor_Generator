import React from 'react';
import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import ModalComponent from '../../secondary_components/Modal';
import useData from '../../../hooks/useData';
import NoItem from '../../secondary_components/third_components/NoItem';
import Loading from '../../secondary_components/third_components/Loading';
import Drag from '../main/Drag';

const TemplateComponent = ({ id }) => {
  const { data, loading, setData, deleteData, updatePosition } = useData(id);
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
      <div className="w-full max-h-screen overflow-hidden hover:overflow-y-scroll p-4  bg-white ">
        <div className="flex justify-start items-center mb-3">
          <button
            onClick={handleOpenModal}
            className="px-4  py-2 bg-zinc-900 flex justify-center items-center gap-4 text-white font-semibold rounded-md hover:bg-gray-300"
          >
            <CirclePlus />
          </button>
        </div>
        {data.length > 0 ? (
          <Drag
            updatePosition={updatePosition}
            deleteData={deleteData}
            parentId={id}
            data={data}
            setData={setData}
          />
        ) : (
          <NoItem onCreateTemplateClick={handleOpenModal} />
        )}

        {isModalOpen && <ModalComponent edit={false} id={id} onClose={handleCloseModal} />}
      </div>
    ))
  );
};

export default TemplateComponent;
