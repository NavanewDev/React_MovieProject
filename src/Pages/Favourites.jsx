import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../Components/MovieCard';

function Favourites()
{
    const {favourites} = useMovieContext();

    if(favourites) {
        return (
            <div className='favorites'>
                <h2>Your Favourites</h2>
                <div className='movies-grid'>
                    {favourites.map((movie) => (
                        <MovieCard movie={movie} id={movie.id}/>
                    ))}
                </div>
            </div>
        )
    }
    return(
        <div className="favorites-empty">
            <h2>No favourite movies in here yet</h2>
            <p>Start adding movies now!!!</p>
        </div>
    )
}

export default Favourites;