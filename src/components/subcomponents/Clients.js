import React from 'react';
import ClientGallery from './ClientGallery';

const Clients = () => {
  const Title = "Clients we work with";
  return (
    <section className='min-h-screen font-regular bg-slate-100 flex flex-col items-center'>
      <div className='text-center text-3xl p-8 font-semibold md:text-5xl md:p-14 text-blue-900'>
        {Title}
      </div>
      <div className='w-full flex justify-center p-5'>
        <ClientGallery />
      </div>
      <button className=" hidden md:block md:bg-blue-700 rounded-full p-4 m-5 text-white">Check more</button>
    </section>
  );
};

export default Clients;
