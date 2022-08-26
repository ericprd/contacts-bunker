import React from "react";

export default function Register() {
  return (
    <div className='container relative h-full'>
      <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-5/12 gap-3 shadow-2xl py-14 justify-center items-center rounded-xl'>
        <h2 className='text-3xl mb-5'>Register</h2>
        <div className='flex justify-center items-center gap-2'>
          <div className='flex flex-col basis-1/2'>
            <label htmlFor='firstname'>First Name:</label>
            <input
              type='text'
              placeholder='First Name'
              className='border border-slate-300 py-2 px-4 w-full rounded-xl'
              id='firstname'
              name='firstname'
              required
            />
          </div>
          <div className='flex flex-col basis-1/2'>
            <label htmlFor='lastname'>Last Name:</label>
            <input
              type='text'
              placeholder='Last Name'
              className='border border-slate-300 py-2 px-4 w-full rounded-xl'
              id='lastname'
              name='lastname'
            />
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div className='flex flex-col basis-1/2'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              placeholder='email'
              className='border border-slate-300 py-2 px-4 w-full rounded-xl'
              id='email'
              name='email'
              required
            />
          </div>
          <div className='flex flex-col basis-1/2'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              placeholder='password'
              className='border border-slate-300 py-2 px-4 w-full rounded-xl'
              id='password'
              name='password'
              required
            />
          </div>
        </div>
        <button className='w-7/12 py-2 rounded-xl bg-sky-300 mt-5'>Sign Up</button>
      </form>
    </div>
  );
}
