export const mockData = [
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
];
