import React, { useState, useEffect } from 'react';
import { File, LogOut, Eye, Code, Database, Download, Delete } from 'lucide-react';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const HTMLGenerator = () => {
  const [activeTab, setActiveTab] = useState('jsx');
  const [item, setItem] = useState('');
  const { id } = useParams();
  const [buttonCard, setButtonCard] = useState([]);
  const location = useLocation();
  const { name, jsx, html, json, css } = location.state || {}; // Data dari state

  const [jsxCode, setJsxCode] = useState(jsx ? jsx : '');
  const [cssCode, setCssCode] = useState(css ? css : '');
  const [jsonData, setJsonData] = useState(json ? json : '{}');
  const [preview, setPreview] = useState(html);
  const [error, setError] = useState('');
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    try {
      setParsedData(JSON.parse(jsonData));
    } catch (e) {
      setError('Invalid JSON data');
    }
  }, [jsonData]);

  const generatePreview = () => {
    if (error) {
      setPreview('');
      return;
    }

    const escapedJsxCode = jsxCode.replace(/`/g, '\\`').replace(/\$/g, '\\$');
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
          <!-- Include React and ReactDOM -->
          <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
          <!-- Include Babel -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
          const data = ${JSON.stringify(parsedData)};
          const App = () => (
              ${escapedJsxCode}
          );
          ReactDOM.render(<App />, document.getElementById('root'));
          </script>
      </body>
      </html>
    `;
    setPreview(html);
  };

  useEffect(() => {
    generatePreview();
  }, [jsxCode, cssCode, parsedData, error, buttonCard, id]);

  console.log(preview);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Mencegah line break
      generatePreview();
    }
  };

  const saveData = () => {
    const randomId = Math.floor(Math.random() * 1000);
    setParsedData(JSON.parse(jsonData));
    const data = {
      name: `Template ${randomId}`,
      style: cssCode,
      jsx: jsxCode,
      json: parsedData,
      html: preview,
    };
    const handleUpdate = async (id, data) => {
      try {
        const response = await axios.patch(`http://localhost:5555/template/?id=${id}`, data);
        if (response) {
          Swal.fire({
            title: 'Berhasil',
            text: ' Berhasil Menyimpan Data',
            icon: 'success',
            confirmButtonColor: '#3085d6',
          });
          window.location.href = '/main';
        }
        console.log(response);
      } catch (error) {
        Swal.fire({
          title: 'Update Gagal',
          text: 'Tidak Berhasil Menyimpan Data',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
      }
    };

    handleUpdate(id, data);
  };

  useEffect(() => {
    const handleDetail = (id) => {
      const filterItem = buttonCard.find((item) => item.id === id);

      if (filterItem) {
        try {
          // Parsing JSON sebelum diset ke state
          const parsedJson = JSON.parse(JSON.stringify(filterItem.json)); // Menyalin dan mem-parsing JSON
          setParsedData(parsedJson); // Mengupdate parsedData untuk digunakan di JSX
          setJsonData(JSON.stringify(parsedJson, null, 2));
        } catch (error) {
          console.error('Invalid JSON data', error);
        }

        setItem(filterItem.id);
        setCssCode(filterItem.style);
        setJsxCode(filterItem.jsx);

        const escapedJsxCode = jsxCode.replace(/`/g, '\\`').replace(/\$/g, '\\$');

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
              <!-- Include React and ReactDOM -->
              <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
              <!-- Include Babel -->
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
              <script type="text/babel">
              const data = ${JSON.stringify(parsedData)};
              const App = () => (
                  ${escapedJsxCode}
              );
              ReactDOM.render(<App />, document.getElementById('root'));
              </script>
          </body>
          </html>
        `;
        setPreview(html);
      }
    };
    handleDetail(id);
  }, [id]);

  const handleHapus = () => {
    const handleDelete = async (id) => {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are You Sure to Delete Data?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        confirmButtonColor: 'rgb(255 10 10)',
      }).then((res) => {
        if (res.isConfirmed) {
          if (res.isConfirmed) {
            axios.delete(`http://localhost:5555/template/?id=${id}`, {}).then(() => {
              Swal.fire({
                title: 'Confirmation',
                text: 'Produk Berhasil di hapus',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: 'rgb(255 10 10)',
              });
              window.location.href = '/main';
            });
          }
        }
      });
    };
    handleDelete(id);
  };

  const renderEditor = () => {
    switch (activeTab) {
      case 'jsx':
        return (
          <div className="relative h-full">
            <textarea
              onKeyDown={handleKeyDown}
              value={error ? error : jsxCode}
              onChange={(e) => setJsxCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-gray-100 font-mono p-4 resize-none focus:outline-none"
              aria-label="JSX Editor"
              placeholder="Enter your JSX template here..."
            />
            <div className="absolute bottom-4 right-4 text-xs text-gray-400">
              Using Tailwind CSS
            </div>
          </div>
        );
      case 'css':
        return (
          <div className="relative h-full">
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-gray-100 font-mono p-4 resize-none focus:outline-none"
              aria-label="Custom CSS Editor"
              placeholder="Add custom CSS styles here (only for styles not available in Tailwind)..."
            />
            <div className="absolute bottom-4 right-4 text-xs text-gray-400">Custom CSS Only</div>
          </div>
        );
      case 'json':
        return (
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className="w-full h-full bg-gray-900 text-gray-100 font-mono p-4 resize-none focus:outline-none"
            aria-label="JSON Editor"
            placeholder="Enter your data structure here..."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full flex bg-gray-900 text-white">
      {/* Sidebar */}
      <Layout>
        {/* Tab Navigation */}
        <div className="flex items-center gap-2 p-4 bg-gray-800">
          <button
            onClick={() => setActiveTab('jsx')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              activeTab === 'jsx' ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          >
            <Code size={16} />
            JSX Template
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              activeTab === 'css' ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          >
            <Code size={16} />
            Custom CSS
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              activeTab === 'json' ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          >
            <Database size={16} />
            JSON Data
          </button>

          <button
            onClick={handleHapus}
            className="ml-auto self-end flex items-center gap-2 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            <Delete size={16} />
            Hapus
          </button>

          <button
            onClick={saveData}
            className=" flex items-center gap-2 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
          >
            <Download size={16} />
            Simpan
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
          {/* Editor */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-full">{renderEditor()}</div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 flex items-center gap-2">
              <Eye size={16} className="text-gray-600" />
              <span className="text-gray-600">Preview</span>
            </div>
            <iframe
              srcDoc={preview}
              title="Preview"
              className="w-full h-full bg-white"
              sandbox="allow-scripts"
            />
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-4 bg-red-500 text-white absolute bottom-0 right-0 m-4 rounded">
            {error}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default HTMLGenerator;
