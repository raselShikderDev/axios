import { NavLink } from "react-router-dom";
import logo from "../assets/color_logo.png";
export default function Header() {
  return (
    <header className="text-xl">
      <div className="bg-gray-800 text-white py-1 px-4 sm:px-20 flex flex-wrap justify-between items-center">
        <div id="leftSide" className="w-full sm:w-auto hidden sm:block ">
          <p>Welcome to Rasels Website</p>
        </div>
        <div
          id="RightSide"
          className="w-full sm:w-auto flex justify-between items-center sm:justify-start"
        >
          <button className="text-sky-400 rounded sm:mr-2">SignIn</button>
          <button className="bg-sky-400 hover:bg-sky-800 text-white pb-1 px-2 rounded">
            SignUp
          </button>
        </div>
      </div>
      <div className="bg-slate-50 px-4 sm:px-20 w-full sm:w-auto flex items-center justify-center sm:justify-between flex-col sm:flex-row ">
        <div id="navLogo" className="w-full sm:w-1/2">
          <a to="#" className="flex justify-center sm:justify-start">
            <img
              className="object-contain w-32 sm:w-52 py-2 "
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        <ul className=" w-full sm:w-auto hidden sm:flex gap-5 justify-center sm:justify-start ">
          <li>
            <NavLink to="/" className="hover:text-gray-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-600 ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="hover:text-gray-600 ">
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-600 ">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
    // <header className="bg-gray-900 text-white">
    //   <div className="bg-gray-800 py-4 px-6 flex flex-wrap justify-between items-center">
    //     <div className="w-full sm:w-auto flex justify-between sm:justify-start sm:space-x-4 mb-4 sm:mb-0">
    //       <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign In</button>
    //       <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Sign Up</button>
    //     </div>
    //     <div className="w-full sm:w-auto sm:text-right hidden sm:block">
    //       <p className="text-lg">Welcome to the World's Best Movies Site</p>
    //     </div>

    //   </div>
    //   <nav className="bg-gray-900 py-4 px-6">
    //     <div className="max-w-screen-lg mx-auto flex justify-between items-center">
    //       <div>
    //         <img src={logo} alt="Logo" className="w-32"/>
    //       </div>
    //       <ul  className="hidden sm:flex space-x-6">
    //         <li><a href="#" className="hover:text-gray-400">Home</a></li>
    //         <li><a href="#" className="hover:text-gray-400">Movies</a></li>
    //         <li><a href="#" className="hover:text-gray-400">TV Shows</a></li>
    //         <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
    //       </ul>

    //     </div>
    //   </nav>

    // </header>
  );
}

// flex  text-white justify-between items-center  py-3 [topHeadr]
//  [Rightside Signin btn]
//  [LeftSide signup btn]

//  [navbar]
// flex flex-wrap text-black justify-between items-center [headernavbar]
// text-blue-700 font-bold text-xl hover:text-black [logo img]
//   [navlink]
