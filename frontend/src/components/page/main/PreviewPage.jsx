import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const PreviewPage = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  const showDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/template/?id=${id}`);
      const filteredData = response.data;

      // Assuming filteredData[1].html contains the pure HTML content
      setPreview(filteredData[1].html);
    } catch (error) {
      Swal.fire({
        title: 'Gagal',
        text: `Tidak ada data`,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'rgb(3 150 199)',
      });
    }
  };

  useEffect(() => {
    showDetail();
    2;
  }, []);

  return (
    <div className="h-screen w-full flex shadow-lg text-white a4-page">
      <div className="flex justify-center items-center w-full gap-4">
        <div className="bg-white rounded-lg overflow-hidden w-full h-full">
          {/* Display the pure HTML content in iframe */}
          <iframe
            srcDoc={preview} // This will render the HTML content
            title="Preview"
            className="w-full h-full bg-white"
            sandbox="allow-scripts"
          />
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-red-500 text-white absolute bottom-0 right-0 m-4 rounded">
          {error}d
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
