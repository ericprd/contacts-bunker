export default function Home() {
  return (
    <div className='w-full'>
      <div className='container mx-auto text-center p-10 w-4/5'>
        <h1 className='text-5xl mb-10'>Welcome to the Contact Bunker.</h1>
        <p className='text-xl mb-5'>
          Here you can save your friends or families contact without worries you
          forgot their contact. We save it for you and you can look for their
          contact easily, anywhere, anytime you want to.
        </p>
        <button className='rounded-xl text-lg bg-sky-200 px-5 mr-2'>
          Sign In
        </button>
        <button className='rounded-xl text-lg bg-green-200 px-5'>
          Register
        </button>
      </div>
    </div>
  );
}
