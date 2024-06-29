import React from 'react';

const Contacts = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-200 p-12 md:p-28'>
      <h1 className='text-7xl text-blue-700 mb-10 font-semibold'>Contact</h1>
      <form className=' bg-white shadow-md rounded-3xl p-8 w-full max-w-2xl'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 rounded-xl' htmlFor='name'>
            Name
          </label>
          <input
            className='shadow appearance-none border w-full py-4 px-3 rounded-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Your name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 rounded-xl' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border w-full py-4 px-3 rounded-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Your email'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 rounded-xl' htmlFor='phone'>
            Phone
          </label>
          <input
            className='shadow appearance-none border w-full py-4 px-3 rounded-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='phone'
            type='phone'
            placeholder='Your Phone'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 rounded-xl' htmlFor='message'>
            Message
          </label>
          <textarea
            className='shadow appearance-none border w-full py-4 px-3 rounded-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            rows='5'
            placeholder='Your message'
          ></textarea>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
