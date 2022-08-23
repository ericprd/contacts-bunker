import AddContact from "../add-contact/AddContact";
import Contact from "../contact/Contact";

export default function ContactList() {
  return (
    <aside className='h-full w-full sm:w-2/5 lg:w-1/5 p-2 pb-20 overflow-y-scroll overflow-x-hidden border border-r-slate-700'>
      <AddContact />
      <Contact />
    </aside>
  );
}
