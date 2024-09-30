
import { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import getMovies from '../Services/getAllMovies';

export const Movies = () => {
    const [allMovies, setAllMovies] = useState([])
    const getAllMovies = async () => {
      
      try {
        const data = await getMovies();
        setAllMovies(data.data.Search);
        
      } catch (error) {
        console.log(error.message);
        return error
      }
    };
  
    useEffect(() => {
      getAllMovies()
    }, [])
  
    // console.log(allMovies)
    return (
      <>
      <h2 className="text-5xl text-center my-3">Movies</h2>
      <ul className="py-5 flex h-full w-full items-center flex-wrap gap-20 justify-center">
        {allMovies.map((currMovie) => {
          return <Card className="" key={currMovie.imdbID} data={currMovie} />
        })}
    </ul>
      </>
  )
}
