import React, { useEffect, useState } from 'react';
import LogoComp from './third_components/LogoComp';
import SelectNext from './next_ui/Select';
import Container from './third_components/Container';
import { CirclePlus } from 'lucide-react';
import useData from '../../hooks/useData';
import ImageComp from './third_components/ImageComp';
import BreakComp from './third_components/BreakComp';
import TextComp from './third_components/TextComp';
import { list } from '../../components/secondary_components/next_ui/data/select/data';
import { alignment } from '../../components/secondary_components/next_ui/data/select/data';
import TitleRaportComp from './third_components/TitleRaportComp';
import TextBoxComp from './third_components/TextBoxComp';
import MinistryComp from './third_components/MinistryComp';
import InstructionsComp from './third_components/InstructionsComp';
import SchoolDataComp from './third_components/SchoolDataComp';
import StudentData from './third_components/StudentDataComp';
import PasFotoComp from './third_components/PasFotoComp';

function ModalComponent({ onClose, id }) {
  const [formData, setFormData] = useState({});
  const [selectData, setSelectData] = useState('');
  const { createData } = useData(id);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ['key']: selectData,
    }));
  }, [selectData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectData(value);
  };

  const handleSubmit = () => {
    createData(formData).then(() => onClose());
  };

  const shouldRenderTextComp =
    selectData === 'h1' ||
    selectData === 'h2' ||
    selectData === 'h3' ||
    selectData === 'h4' ||
    selectData === 'h5' ||
    selectData === 'note' ||
    selectData === 'paragraph';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[30rem] max-h-[90vh] overflow-y-scroll">
        <h2 className="flex justify-start gap-2 items-center  text-xl font-semibold text-gray-800 mb-4">
          <CirclePlus size={20} /> Create Components
        </h2>
        <form onSubmit={handleSubmit}>
          <Container>
            <SelectNext label={'Component'} list={list} handleOnChange={handleSelectChange} />
            {selectData == 'logo' && (
              <LogoComp
                selectData={selectData}
                list={alignment}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}
            {selectData == 'image' && (
              <ImageComp
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}
            {selectData == 'break' && (
              <BreakComp
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}
            {shouldRenderTextComp && (
              <TextComp
                list={alignment}
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'title_raport' && (
              <TitleRaportComp
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'text_box' && (
              <TextBoxComp
                list={alignment}
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'ministry' && (
              <MinistryComp
                list={alignment}
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'instruction' && (
              <InstructionsComp
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'school_data' && (
              <SchoolDataComp
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'student_data' && (
              <StudentData
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
            )}

            {selectData == 'pas_photo' && (
              <PasFotoComp
                selectData={selectData}
                formData={formData}
                handleOnChange={handleChange}
              />
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
