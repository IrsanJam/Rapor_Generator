import React, { useState, useEffect } from 'react';
import { File, LogOut, Eye, Code, Database, Download, Delete, Copy, Trash2 } from 'lucide-react';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Editor from '@monaco-editor/react';

const HTMLGenerator = () => {
  const [activeTab, setActiveTab] = useState('jsx');
  const [, setItem] = useState('');
  const { id } = useParams();
  const [buttonCard, setButtonCard] = useState([]);
  const location = useLocation();
  const { jsx, html, json, css } = location.state || {}; // Data dari state
  const [jsxCode, setJsxCode] = useState(jsx ? jsx : '');
  const [cssCode, setCssCode] = useState(css ? css : '');
  const [jsonData, setJsonData] = useState(json ? json : '{}');
  const [preview, setPreview] = useState(html);
  const [error, setError] = useState('');
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    if (!jsonData.trim()) {
      setError('JSON tidak boleh kosong');
      setParsedData({});
      return;
    }

    try {
      const parsed = JSON.parse(jsonData);
      setParsedData(parsed);
      setError(''); // Reset error jika berhasil
    } catch (e) {
      setError('Invalid JSON data');
      setParsedData({});
    }
  }, [jsonData]);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleJsonChange = debounce((value) => setJsonData(value), 300);

  // const generatePreview = () => {
  //   if (error) {
  //     setPreview('');
  //     return;
  //   }

  //   const escapedJsxCode = jsxCode.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  //   const html = `<!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //         <meta charset="UTF-8">
  //         <title>Generated Template</title>
  //         <script src="https://cdn.tailwindcss.com"></script>
  //         <style>
  //         ${cssCode}
  //         </style>
  //     </head>
  //     <body class="bg-gray-50">
  //         <div id="root"></div>
  //         <!-- Include React and ReactDOM -->
  //         <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  //         <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  //         <!-- Include Babel -->
  //         <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  //         <script type="text/babel">
  //         const data = ${JSON.stringify(parsedData)};
  //         const App = () => (
  //             ${escapedJsxCode}
  //         );
  //         ReactDOM.render(<App />, document.getElementById('root'));
  //         </script>
  //     </body>
  //     </html>
  //   `;
  //   setPreview(html);
  // };

  const generatePreview = () => {
    if (error || !parsedData) {
      setPreview('<p style="color: red; text-align: center;">Invalid or Empty JSON Data</p>');
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
          <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
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
  }, [jsxCode, cssCode, parsedData, error, buttonCard, id, jsonData]);

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
      style: cssCode,
      jsx: jsxCode,
      json: parsedData,
      html: preview,
    };
    const handleUpdate = async (id, data) => {
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/template/?id=${id}`,
          data
        );
        if (response) {
          Swal.fire({
            title: 'Berhasil',
            text: ' Berhasil Menyimpan Data',
            icon: 'success',
            confirmButtonColor: '#3085d6',
          }).then((res) => {
            if (res.isConfirmed) {
              window.location.href = '/main';
            }
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Update Gagal',
          text: 'JSX Harus diisi ',
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
            axios.delete(`${import.meta.env.VITE_API_URL}/template/?id=${id}`, {}).then(() => {
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

  const handleCopyId = () => {
    if (id) {
      navigator.clipboard
        .writeText(id)
        .then(() => {
          Swal.fire({
            title: 'Berhasil',
            text: `ID "${id}" telah disalin ke clipboard`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Gagal',
            text: 'Gagal menyalin ID',
            icon: 'error',
            confirmButtonColor: '#3085d6',
          });
        });
    } else {
      Swal.fire({
        title: 'Tidak Ada ID',
        text: 'ID belum tersedia untuk disalin',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const renderEditor = () => {
    switch (activeTab) {
      case 'jsx':
        return (
          <Editor
            height={'90vh'}
            defaultLanguage="html"
            value={jsxCode}
            onChange={(value) => setJsxCode(value)}
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              },
              automaticLayout: true,
              formatOnPaste: true,
              formatOnType: true,
            }}
          />
        );
      case 'css':
        return (
          <div className="relative h-full">
            <Editor
              height={'90vh'}
              defaultLanguage="css"
              value={cssCode}
              onChange={(value) => setCssCode(value)}
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false,
                },
              }}
            />
            <div className="absolute bottom-4 right-4 text-xs text-gray-400">Custom CSS Only</div>
          </div>
        );
      case 'json':
        return (
          <Editor
            height={'90vh'}
            defaultLanguage="json"
            value={jsonData}
            onChange={(value) => handleJsonChange(value)}
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              },
            }}
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
            onClick={handleCopyId}
            className=" flex items-center gap-2 px-4 py-2 bg-amber-500 rounded hover:bg-amber-600"
          >
            <Copy size={16} />
            Salin ID
          </button>

          <button
            onClick={handleHapus}
            className="ml-auto self-end flex items-center gap-2 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            <Trash2 size={16} />
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
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Editor */}
          <div className="bg-gray-800  overflow-hidden">
            <div className="h-full">{renderEditor()}</div>
          </div>

          {/* Preview */}
          <div className="bg-white overflow-hidden">
            <div className="bg-gray-100 p-2 flex items-center gap-2"></div>
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
