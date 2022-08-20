import Contact from "../contact/Contact";

export default function ContactList() {
  return (
    <div className='h-full w-1/5 p-2 pb-20 overflow-y-scroll overflow-x-hidden border border-r-slate-700'>
      {/* <div className='h-10 sticky top-0 w-full bg-black'></div> */}
      <div className='cursor-pointer sticky top-0 left-0  bg-sky-200 p-2 text-center rounded-lg shadow-lg'>
        Add Contact
      </div>
      <Contact />
    </div>
  );
}
