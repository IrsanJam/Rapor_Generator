import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import CardAtom from '../../secondary_components/CardAtom';
import useData from '../../../hooks/useData';

const Column = ({ tasks, deleteData }) => {
  return (
    <div className="flex flex-col gap-3">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <CardAtom
            deleteData={deleteData}
            paramsId={task.id}
            id={task.id}
            name={task.key}
            key={task.id}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
