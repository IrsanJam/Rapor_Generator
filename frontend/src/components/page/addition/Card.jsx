import Layout from '../layout/Layout';
import { Card, CardBody } from '@nextui-org/react';
import { GoArrowDownRight, GoArrowRight, GoVerified } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../../../data/mock';
import Swal from 'sweetalert2';
import axios from 'axios';

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
          className="px-6 m-3 p-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-300"
        >
          Create a Template
        </button>

        {buttonCard.map((card) => (
          <Card key={card.id} className="m-3">
            <CardBody className="bg-zinc-200 w-[40%]  rounded-md text-black p-3 flex justify-center items-center gap-3">
              <div className="flex justify-around w-full items-center gap-4">
                <p>{card.name}</p>
                <div
                  // onClick={() => (window.location.href = `/detail/${card.id}`)}
                  onClick={() => handleCardClick(card)}
                  className="bg-green-500 hover:cursor-pointer hover:bg-green-300 rounded-full gap-3 flex justify-center items-center p-2 w-[4rem]"
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
