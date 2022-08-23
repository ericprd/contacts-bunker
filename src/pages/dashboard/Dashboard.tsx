import ContactDetails from "../../components/contact-details/ContactDetails";
import ContactList from "../../components/contact-list/ContactList";
import Navbar from "../../components/navbar/Navbar";

export default function Dashboard() {
  return (
    <div className='h-full'>
      <Navbar />
      <main className='flex h-full'>
        <ContactList />
        <ContactDetails />
      </main>
    </div>
  );
}
