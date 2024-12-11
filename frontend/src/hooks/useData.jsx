import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const useData = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(false);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/template/data/${id}`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

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
              window.location.reload();
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

  const createData = async (payload) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/template/data/${id}`,
        payload
      );
      if (response) {
        Swal.fire({
          title: 'Done',
          text: `Data succesfully saved`,
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

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, setData, updateData, deleteData, createData, fetchData };
};

export default useData;
