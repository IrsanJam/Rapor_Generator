// components/CreateTemplateModal.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ImageComp from './third_components/ImageComp';
import SelectNext from './next_ui/Select';

function ModalComponent({ onClose }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
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

    onClose(); // Tutup modal setelah submit
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[30rem]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Components</h2>
        <form onSubmit={handleSubmit}>
          <SelectNext />
          <ImageComp formData={formData} handleOnChange={handleOnChange} />

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
              Save Component
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalComponent;

// components not used

{
  /* <input
            type="text"
            value={formData.key}
            onChange={handleOnChange}
            name="key"
            placeholder="Enter key"
            className="w-full p-2 text-black border border-gray-300 rounded-md mb-4"
            required
          />

          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleOnChange}
            placeholder="Enter Value"
            className="w-full p-2 border text-black border-gray-300 rounded-md mb-4"
            required
          /> */
}

{
  /* <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            rows={4}
          /> */
}
