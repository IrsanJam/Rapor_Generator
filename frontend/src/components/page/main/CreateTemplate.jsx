// App.js
import React, { useState } from 'react';
import NoTemplates from '../addition/NoTemplate';
import CreateTemplateModal from '../addition/CreateTemplateModal';
import Card from '../addition/Card';
import CardComponents from '../addition/Card';
import axios from 'axios';
import { useEffect } from 'react';

function CreateTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [buttonCard, setButtonCard] = useState([]);

  const cekData = async () => {
    try {
      const response = await axios.get('http://localhost:5555/template');
      if (response) {
        setButtonCard(response.data);
      }
    } catch (error) {
      Swal.fire({
        title: 'Tidak ada',
        text: 'Template tidak di temukan',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  useEffect(() => {
    cekData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {buttonCard.length === 0 ? (
        <NoTemplates onCreateTemplateClick={handleOpenModal} />
      ) : (
        <CardComponents buttonCard={buttonCard} onCreateTemplateClick={handleOpenModal} />
      )}
      {isModalOpen && <CreateTemplateModal onClose={handleCloseModal} />}
    </div>
  );
}

export default CreateTemplate;
