import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className='w-full bg-slate-500 top-0 left-0  flex flex-row justify-between absolute '>
        <Link to='/' className='p-2 m-7 lg:p-4 lg:m-4 text-xl lg:text-4xl'>
          Projects
        </Link>
        <div className='flex flex-row justify-evenly m-4'>
          <Link
            to='/About'
            className='border-2 rounded-lg p-2 m-7 lg:p-4 lg:m-4 text-xl lg:text-4xl'>
            About me
          </Link>
          <Link
            to='/Hire'
            className='border-2 rounded-lg p-2 m-7 lg:p-4 lg:m-4 text-xl lg:text-4xl'>
            Hire me
          </Link>
          <Link
            to='/Contact'
            className='border-2 rounded-lg p-2 m-7 lg:p-4 lg:m-4 text-xl lg:text-4xl'>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
