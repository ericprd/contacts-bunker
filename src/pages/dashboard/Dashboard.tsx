import ContactDetails from "../../components/contact-details/ContactDetails";
import ContactList from "../../components/contact-list/ContactList";
import Navbar from "../../components/navbar/Navbar";

export default function Dashboard() {
  return (
    <div className='h-full'>
      <Navbar />
      <div className='flex h-full'>
        <ContactList />
        <ContactDetails />
      </div>
    </div>
  );
}
