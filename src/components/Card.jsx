/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const Card = (props) => {
  const { Poster, Year, Title, imdbID } = props.data;
  console.log(props)
  return (
    <li className="rounded-md pt-2 pb-1 px-3 bg-white shadow-sm shadow-slate-500">
      <NavLink to={`/movies/${imdbID}`}>
      <div id="mainContainer">
          <div id="MoviePoster" className="">
            <img className="object-contain w-full" src={Poster} />
          </div>
        </div>
        <h2 className="bg-gray-700 text-white font-bold text-center">
          {Title} {Year}
        </h2>
      </NavLink>
    </li>
  );
};
