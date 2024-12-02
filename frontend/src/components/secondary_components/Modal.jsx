// components/CreateTemplateModal.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import LogoComp from './third_components/LogoComp';
import SelectNext from './next_ui/Select';
import Container from './third_components/Container';
import { CirclePlus } from 'lucide-react';

function ModalComponent({ onClose }) {
  const [formData, setFormData] = useState({});
  const [selectData, setSelectData] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'key' && selectData) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectData,
      }));
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectData(value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[30rem] max-h-[90vh]">
        <h2 className="flex justify-start gap-2 items-center  text-xl font-semibold text-gray-800 mb-4">
          <CirclePlus size={20} /> Create Components
        </h2>
        <form onSubmit={handleSubmit}>
          <Container>
            <SelectNext handleOnChange={handleSelectChange} />
            {selectData == 'logo' && (
              <LogoComp selectData={selectData} formData={formData} handleOnChange={handleChange} />
            )}
          </Container>

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
