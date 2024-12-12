import Layout from '../layout/Layout';
import { Card, CardBody } from '@nextui-org/react';
import { GoArrowDownRight, GoArrowRight, GoVerified } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { FilePenLine } from 'lucide-react';

export default function CardComponents({
  onCreateTemplateClick,
  buttonCard,
  setIsModalOpen,
  setStatus,
  status,
  setId,
}) {
  const navigate = useNavigate();
  const handleCardClick = (card) => {
    navigate(`/detail/${card.id}`, {
      state: {
        name: card.name,
        jsx: card.jsx,
        html: card.html,
        json: card.json,
        css: card.style,
      },
    });
    window.location.href = `/detail/${card.id}`;
  };

  return (
    <Layout>
      <div className="p-3">
        <button
          onClick={onCreateTemplateClick}
          className="px-6 m-3  py-3 bg-gray-500 text-white relative z-[9999] font-semibold rounded-md hover:bg-gray-300"
        >
          Create a Template
        </button>
        {buttonCard.map((card) => (
          <Card key={card.id} className="m-3 !shadow-none w-[70%]">
            <CardBody className="bg-zinc-200 w-full   rounded-md text-black p-3 flex justify-center items-center gap-3">
              <div className="flex justify-between w-full items-center gap-4">
                <p className="pl-3">{card.name}</p>

                <div
                  onClick={() => {
                    setIsModalOpen((prev) => !prev);
                    setStatus('edit');
                    setId(`${card.id}`);
                  }}
                  className="flex justify-center items-center"
                >
                  <div className="div">
                    <FilePenLine className="hover:cursor-pointer" />
                  </div>

                  <div className=" text-zinc-950  rounded-full gap-3 flex justify-center items-center p-2 w-[5rem]">
                    <GoArrowRight
                      className="hover:cursor-pointer"
                      onClick={() => handleCardClick(card)}
                      color="bg-green-300  "
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
