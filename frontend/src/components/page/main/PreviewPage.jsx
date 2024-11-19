import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const PreviewPage = () => {
  const { id } = useParams();
  const [error, setError] = useState('');
  const [parsedData, setParsedData] = useState({});
  const [jsxCode, setJsxCode] = useState(''); // State untuk menyimpan JSX
  const [cssCode, setCssCode] = useState(''); // State untuk menyimpan CSS
  const [jsonData, setJsonData] = useState('{}'); // State untuk menyimpan JSON data
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const showDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/template/?id=${id}`);
      const filteredData = response.data;
      setJsxCode(filteredData[1].jsx);
      setCssCode(filteredData[1].style);
      setJsonData(filteredData[1].json);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        title: 'Gagal',
        text: `Tidak ada data`,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'rgb(3 150 199)',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    showDetail();
  }, []);

  useEffect(() => {
    if (jsxCode) {
      try {
        setParsedData(JSON.parse(jsonData));
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Generated Template</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            ${cssCode}
          </style>
        </head>
        <body class="bg-gray-50">
          <div id="root"></div>
          <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const data = ${JSON.stringify(parsedData)};
            const App = () => (
              ${jsxCode}
            );
            ReactDOM.render(<App />, document.getElementById('root'));
          </script>
        </body>
        </html>`;
        setPreview(html);
      } catch (e) {
        setError('Invalid JSON data');
      }
    }
  }, [jsonData, jsxCode]);

  return (
    <div className="h-screen w-full flex shadow-lg text-white a4-page">
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full gap-4">
          <div className="bg-white rounded-lg overflow-hidden w-full h-full">
            {/* Render iframe hanya jika jsxCode tersedia */}
            {jsxCode ? (
              <iframe
                srcDoc={preview} // Render HTML di iframe
                title="Preview"
                className="w-full h-full bg-white"
                sandbox="allow-scripts"
              />
            ) : (
              <div className="text-gray-500 flex justify-center items-center h-full">
                Tidak ada konten untuk ditampilkan.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-red-500 text-white absolute bottom-0 right-0 m-4 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
