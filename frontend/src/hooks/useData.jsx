import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const useData = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/template/data/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const deleteData = async (paramsId) => {
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
          axios
            .delete(`${import.meta.env.VITE_API_URL}/template/data/${id}/${paramsId}`, {})
            .then(() => {
              Swal.fire({
                title: 'Confirmation',
                text: 'Produk Berhasil di hapus',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: 'rgb(255 10 10)',
              });
            });
        }
      }
    });
  };

  const updateData = async (paramsId, payload) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/template/data/${id}/${paramsId}`,
        payload
      );
      if (response) {
        Swal.fire({
          title: 'Success',
          text: ' Success Updated Data',
          icon: 'success',
          confirmButtonColor: '#3085d6',
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

  return { data, updateData, deleteData };
};

export default useData;
