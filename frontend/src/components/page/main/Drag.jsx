import React, { useState } from 'react';
import { closestCenter, closestCorners, DndContext } from '@dnd-kit/core';
import Column from '../addition/Column';
import { arrayMove } from '@dnd-kit/sortable';
import useData from '../../../hooks/useData';

const Drag = ({ data, setData, deleteData }) => {
  const getTaskPosition = (id) => data.findIndex((data) => data.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;
    setData((tasks) => {
      const originalPos = getTaskPosition(active.id);
      const targetPos = getTaskPosition(over.id);
      return arrayMove(tasks, originalPos, targetPos);
    });
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