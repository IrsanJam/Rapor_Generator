import React from 'react';
import InputNext from '../next_ui/Input';
import TextAreaNext from '../next_ui/Textarea';

const TitleRaportComp = ({ formData, handleOnChange, selectData }) => {
  return (
    <div>
      <InputNext
        type={'text'}
        label={'key'}
        handleOnChange={handleOnChange}
        selectData={selectData}
        formData={formData}
      />
      <TextAreaNext label={'value'} handleOnChange={handleOnChange} formData={formData} />
    </div>
  );
};

export default TitleRaportComp;

{
  /* <input
        type="text"
        value={formData.key}
        onChange={handleOnChange}
        name="key"
        placeholder="Enter key"
        className="w-full p-2 text-black border border-gray-300 rounded-md mb-4"
        required
      /> */
}

{
  /* <input
        type="text"
        name="value"
        value={formData.value}
        onChange={handleOnChange}
        placeholder="Enter Value"
        className="w-full p-2 border text-black border-gray-300 rounded-md mb-4"
        required
      /> */
}