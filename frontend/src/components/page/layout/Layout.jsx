import React, { useState, useEffect } from 'react';
import { File, LogOut, Eye, Code, Database, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../secondary_components/LogoutButton';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('jsx');
  const [item, setItem] = useState('');
  const navigate = useNavigate();
  const [buttonCard, setButtonCard] = useState([
    {
      id: '1',
      name: 'Group 1',
      style:
        '.group { padding: 20px; } .member { border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; } .member h3 { margin-top: 0; } .member p { margin: 5px 0; }',
      json: {
        groups: [
          {
            id: '1',
            name: 'Kelompok 1',
            members: 'Anggota 1, Anggota 2, Anggota 3',
            task: 'Menulis bagian pendahuluan',
          },
          {
            id: '2',
            name: 'Kelompok 2',
            members: 'Anggota 4, Anggota 5, Anggota 6',
            task: 'Melakukan riset dan mengumpulkan referensi',
          },
          {
            id: '3',
            name: 'Kelompok 3',
            members: 'Anggota 7, Anggota 8, Anggota 9',
            task: 'Menulis kesimpulan dan abstrak',
          },
        ],
      },
      jsx: '<div className="p-5 space-y-4"> {data.groups.map((group, index) => ( <div key={index} className="bg-white shadow-md rounded-lg p-5 border border-gray-300"> <h2 className="text-xl font-semibold text-gray-700">{group.name}</h2> <p className="text-sm text-gray-600 mt-2"><strong>Tugas:</strong> {group.task}</p> <ul className="list-disc pl-5 mt-2"> {group.members.map((member, idx) => ( <li key={idx} className="text-gray-600">{member}</li> ))} </ul> </div> ))} </div>',
    },
    {
      id: '2',
      name: 'Group 2',
      style:
        '.group { margin: 20px; } .member { padding: 10px; border: 2px solid #000; } .member h3 { color: #2c3e50; }',
      json: {
        groups: [
          {
            id: '1',
            name: 'Kelompok A',
            members: 'Anggota X, Anggota Y, Anggota Z',
            task: 'Membuat laporan keuangan',
          },
          {
            id: '2',
            name: 'Kelompok B',
            members: 'Anggota P, Anggota Q, Anggota R',
            task: 'Menyiapkan presentasi',
          },
        ],
      },
      jsx: '<div className="p-5 space-y-4"> {data.groups.map((group, index) => ( <div key={index} className="bg-gray-100 shadow-md rounded-lg p-5 border border-gray-400"> <h2 className="text-xl font-semibold text-blue-600">{group.name}</h2> <p className="text-sm text-gray-700 mt-2"><strong>Tugas:</strong> {group.task}</p> <ul className="list-disc pl-5 mt-2"> {group.members.map((member, idx) => ( <li key={idx} className="text-gray-700">{member}</li> ))} </ul> </div> ))} </div>',
    },
    {
      id: '3',
      name: 'Group 3',
      style:
        '.group { padding: 30px; } .member { background-color: #f0f0f0; border-radius: 8px; padding: 12px; margin-bottom: 15px; } .member h3 { font-size: 18px; font-weight: bold; }',
      json: {
        groups: [
          {
            id: '1',
            name: 'Kelompok X',
            members: 'Anggota A, Anggota B, Anggota C',
            task: 'Menyusun proposal',
          },
          {
            id: '2',
            name: 'Kelompok Y',
            members: 'Anggota D, Anggota E, Anggota F',
            task: 'Mempersiapkan laporan penelitian',
          },
        ],
      },
      jsx: '<div className="p-5 space-y-4"> {data.groups.map((group, index) => ( <div key={index} className="bg-white shadow-lg rounded-lg p-5 border border-gray-500"> <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2> <p className="text-sm text-gray-600 mt-2"><strong>Tugas:</strong> {group.task}</p> <ul className="list-disc pl-5 mt-2"> {group.members.map((member, idx) => ( <li key={idx} className="text-gray-600">{member}</li> ))} </ul> </div> ))} </div>',
    },
    {
      id: '4',
      name: 'Group 4',
      style:
        '.group { padding: 25px; } .member { border: 1px dashed #ddd; padding: 20px; margin-bottom: 12px; } .member h3 { font-size: 20px; text-transform: uppercase; } .member p { color: #555; }',
      json: {
        groups: [
          {
            id: '1',
            name: 'Kelompok Alpha',
            members: 'Anggota 1, Anggota 2, Anggota 3',
            task: 'Menulis pendahuluan',
          },
          {
            id: '2',
            name: 'Kelompok Beta',
            members: 'Anggota 4, Anggota 5, Anggota 6',
            task: 'Melakukan riset literatur',
          },
        ],
      },
      jsx: '<div className="p-5 space-y-4"> {data.groups.map((group, index) => ( <div key={index} className="bg-white shadow-lg rounded-lg p-5 border border-gray-600"> <h2 className="text-xl font-semibold text-gray-900">{group.name}</h2> <p className="text-sm text-gray-500 mt-2"><strong>Tugas:</strong> {group.task}</p> <ul className="list-disc pl-5 mt-2"> {group.members.map((member, idx) => ( <li key={idx} className="text-gray-500">{member}</li> ))} </ul> </div> ))} </div>',
    },
  ]);

  //we need item.price

  const [jsxCode, setJsxCode] = useState(`<div className="container mx-auto p-4">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
    <p className="text-gray-600 mb-8">{data.description}</p>
    
    <div className="grid gap-4">
      {data.items.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          {item.price && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">${item ? item : 0} 0</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>`);

  const [cssCode, setCssCode] =
    useState(`/* Custom CSS - Only add styles not available in Tailwind */
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-animation {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`);

  const [jsonData, setJsonData] = useState(`{
  "title": "Featured Products",
  "description": "Check out our latest collection of premium items.",
  "items": [
    {
      "id": 1,
      "name": "Premium Package",
      "description": "High-quality product with premium features",
      "price": 99.99
    },
    {
      "id": 2,
      "name": "Standard Package",
      "description": "Great value for everyday use",
      "price": 49.99
    }
  ]
}`);

  const handleChangeData = (id) => {
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
    }
  };

  const [preview, setPreview] = useState('');
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
  }, [jsxCode, cssCode, parsedData, error, buttonCard]);

  useEffect(() => {
    generatePreview();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Mencegah line break
      generatePreview();
    }
  };

  // const downloadHTML = () => {
  //   const blob = new Blob([preview], { type: 'text/html' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'template.html';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

  const saveData = () => {
    const randomId = Math.floor(Math.random() * 1000);
    setParsedData(JSON.parse(jsonData));
    const data = {
      id: String(randomId),
      name: `Template ${randomId}`,
      style: cssCode,
      jsx: jsxCode,
      json: parsedData,
    };
    setButtonCard((prevButtonCard) => [...prevButtonCard, data]);
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
    <div className="h-auto pb-5  w-full flex bg-gray-900 text-white">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-900 border-r h-screen h-s border-gray-700">
        <div className="p-4 px-2 flex items-center fixed top-[-10px] w-full">
          <img
            className=" max-h-[80px] max-w-[80px]"
            src="../../public/icon-preview.png"
            alt="logo"
          />
          <span className="text-xl font-bold">Report Gen</span>
        </div>

        <div className="px-4 py-2 fixed top-24 w-[15%]">
          <button
            onClick={() => navigate('/main')}
            className={`flex items-center gap-2 px-3 py-2 w-full rounded-md text-gray-300 hover:text-white hover:bg-gray-500`}
          >
            <File size={20} />
            <span>Template</span>
          </button>
        </div>

        <button className="fixed bottom-4 left-4 flex items-center gap-2 text-gray-400 hover:text-white">
          <LogOut size={20} />
          <LogoutButton />
        </button>
      </nav>

      <div className="flex-1 flex flex-col bg-white">{children}</div>
    </div>
  );
};

export default Layout;
