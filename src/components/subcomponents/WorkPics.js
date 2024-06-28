import React from 'react';

const Workpics = (props) => {
    return (
        <div className='flex items-center justify-center bg-white border border-gray-200 shadow-md p-4 rounded-md min-w-[300px] h-[300px]'>
            Picture {props.cardno}
        </div>
    )
}

export default Workpics;
