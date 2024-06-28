import React from 'react';
import Workpics from './WorkPics';

const WorkGallery = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-8 justify-center">
        <Workpics cardno='1' />
        <Workpics cardno='2' />
        <Workpics cardno='3' />
        <Workpics cardno='4' />
        <Workpics cardno='5' />
        <Workpics cardno='6' />
      </div>
    </div>
  );
};

export default WorkGallery;
