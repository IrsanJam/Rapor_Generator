// components/CreateTemplateModal.js
import React, { useEffect, useState } from 'react';
import { mockData } from '../../../data/mock';
import axios from 'axios';
import Swal from 'sweetalert2';

function CreateTemplateModal({ onClose, status, id }) {
  const [templateName, setTemplateName] = useState('');

  useEffect(() => {
    if (status === 'edit') {
      const handleId = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/template/${id}`);
        setTemplateName(response.data.name);
      };
      handleId();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    if (status !== 'edit') {
      e.preventDefault();
      const data = {
        name: templateName,
      };
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/template`, data);
        if (response) {
          Swal.fire({
            title: 'Done',
            text: `Data succesfully saved`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: 'rgb(3 150 199)',
          }).then((res) => {
            window.location.reload();
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Gagal',
          text: 'Gagal Menyimpan Data',
          icon: 'warning',
          confirmButtonColor: '#3085d6',
        });
      }
    } else {
      e.preventDefault();
      const data = {
        name: templateName,
      };
      try {
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/template/${id}`, data);
        if (response) {
          Swal.fire({
            title: 'Done',
            text: `Data succesfully Updated`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: 'rgb(3 150 199)',
          }).then((res) => {
            window.location.reload();
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Gagal',
          text: 'Gagal Mengupdate Data',
          icon: 'warning',
          confirmButtonColor: '#3085d6',
        });
      }
    }

    onClose(); // Tutup modal setelah submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[30rem]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {status === 'add' ? 'Create New Template' : 'Edit Template'}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            placeholder="Enter template name"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          />
          {/* <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            rows={4}
          /> */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-zinc-900 text-white font-semibold rounded-md hover:bg-gray-500"
            >
              Save Template
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTemplateModal;
