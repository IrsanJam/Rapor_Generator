import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import Raport from '../raport/Raport';
import Test from '../raport/item/Test';

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

  return <Raport />;
};

export default PreviewPage;
