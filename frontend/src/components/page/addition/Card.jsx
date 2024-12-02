import Layout from '../layout/Layout';
import { Card, CardBody } from '@nextui-org/react';
import { GoArrowDownRight, GoArrowRight, GoVerified } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

export default function CardComponents({ onCreateTemplateClick, buttonCard }) {
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
          className="px-6 m-3  p-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-300"
        >
          Create a Template
        </button>

        {buttonCard.map((card) => (
          <Card key={card.id} className="m-3 w-[40%]">
            <CardBody className="bg-zinc-200 w-full  rounded-md text-black p-3 flex justify-center items-center gap-3">
              <div className="flex justify-between w-full items-center gap-4">
                <p className="pl-3">{card.name}</p>
                <div
                  onClick={() => handleCardClick(card)}
                  className="bg-green-500 hover:cursor-pointer hover:bg-green-300 rounded-full gap-3 flex justify-center items-center p-2 w-[5rem]"
                >
                  <GoArrowRight color="bg-green-300" />
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
