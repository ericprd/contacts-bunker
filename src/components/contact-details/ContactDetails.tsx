export default function ContactDetails() {
  return (
    <div className='mx-auto mb-10 p-10 w-full overflow-y-scroll'>
      <div className='w-3/4 flex flex-wrap justify-center mx-auto gap-5'>
        <fieldset className='border border-slate-200 rounded-lg p-4 h-fit'>
          <legend className='p-3 font-bold text-xl'>Name:</legend>
          <table>
            <tbody className='w-72'>
              <tr>
                <td className='p-5'>First Name:</td>
                <td className='p-5'>Johsdfasdfsdn</td>
              </tr>
              <tr>
                <td className='p-5'>Last Name:</td>
                <td className='p-5'>Doeasdfasdfasdf</td>
              </tr>
              <tr>
                <td className='p-5'>Nickname:</td>
                <td className='p-5'>Johnsdfasd</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset className='border border-slate-200 rounded-lg p-4 h-fit'>
          <legend className='p-3 font-bold text-xl'>Contact</legend>
          <table>
            <tbody className='w-72'>
              <tr>
                <td className='p-5'>Phone:</td>
                <td className='p-5'>08123456789</td>
              </tr>
              <tr>
                <td className='p-5'>Email:</td>
                <td className='p-5'>johndoe@email.com</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset className='border border-slate-200 rounded-lg p-4 h-fit'>
          <legend className='p-3 font-bold text-xl'>Work</legend>
          <table>
            <tbody className='w-72'>
              <tr className='p-5'>
                <td className='p-5'>Department:</td>
                <td className='p-5'>Frontend</td>
              </tr>
              <tr>
                <td className='p-5'>Company:</td>
                <td className='p-5'>Cyber Space inc.</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset className='border border-slate-200 rounded-lg p-4 h-fit'>
          <legend className='p-3 font-bold text-xl'>Address</legend>
          <table>
            <tbody className='w-72'>
              <tr>
                <td className='p-5'>Street:</td>
                <td className='p-5'>Cyber road</td>
              </tr>
              <tr>
                <td className='p-5'>City:</td>
                <td className='p-5'>Space</td>
              </tr>
              <tr>
                <td className='p-5'>State:</td>
                <td className='p-5'>West Java</td>
              </tr>
              <tr>
                <td className='p-5'>ZIP code:</td>
                <td className='p-5'>45757</td>
              </tr>
              <tr>
                <td className='p-5'>Country:</td>
                <td className='p-5'>Indonesia</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset className='border border-slate-200 rounded-lg p-4 h-fit'>
          <legend className='p-3 font-bold text-xl'>Other</legend>
          <table>
            <tbody className='w-72'>
              <tr>
                <td className='p-5'>Birthday:</td>
                <td className='p-5'>11/02/1992</td>
              </tr>
              <tr>
                <td className='p-5'>Notes:</td>
                <td className='p-5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sunt, qui.
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    </div>
  );
}
