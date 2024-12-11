import React, { useState } from 'react';
import { closestCenter, closestCorners, DndContext } from '@dnd-kit/core';
import Column from '../addition/Column';
import { arrayMove } from '@dnd-kit/sortable';

const Drag = ({ data, setData, deleteData, updatePosition }) => {
  const getTaskPosition = (id) => data.findIndex((data) => data.id === id);

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    let updatedData;

    // Perbarui data di frontend
    setData((prevData) => {
      const originalPos = getTaskPosition(active.id);
      const targetPos = getTaskPosition(over.id);

      updatedData = arrayMove([...prevData], originalPos, targetPos).map((item, index) => ({
        ...item,
        position: index, // Set ulang posisi berdasarkan indeks baru
      }));

      return updatedData; // Kembalikan state yang diperbarui
    });

    // Kirim pembaruan ke backend
    try {
      const updatedPositions = updatedData.map((item) => ({
        id: item.id,
        position: item.position,
      }));

      updatePosition(updatedPositions);
      console.log(updatedData);
    } catch (error) {
      console.error('Failed to update positions:', error);
      // Tambahkan feedback ke pengguna jika diperlukan
      alert('Failed to update positions. Please try again.');
    }
  };

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <div className="flex justify-center items-center">
          <Column deleteData={deleteData} tasks={data} />
        </div>
      </DndContext>
    </div>
  );
};

export default Drag;
