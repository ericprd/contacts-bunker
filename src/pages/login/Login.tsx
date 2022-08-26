import React from "react";

export default function Login() {
  return (
    <div className='container relative h-full'>
      <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/3 gap-3 shadow-2xl py-14 justify-center items-center rounded-xl'>
        <h2 className='text-3xl mb-5'>Login</h2>
        <input
          type='text'
          placeholder='username'
          className='border border-slate-300 py-2 px-4 w-7/12 rounded-xl'
          required
        />
        <input
          type='password'
          placeholder='password'
          className='border border-slate-300 py-2 px-4 w-7/12 rounded-xl'
          required
        />
        <button className='w-7/12 py-2 rounded-xl bg-sky-300'>Login</button>
        <p>
          Don't have account?{" "}
          <span className='text-sky-500 cursor-pointer'>Sign Up</span>
        </p>
      </form>
    </div>
  );
}
