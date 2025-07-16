import { createContext, useContext, useState, useEffect } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const movieFavs = localStorage.getItem("favourites")

        if(movieFavs) setFavourites(JSON.parse(movieFavs));
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites])

    const addFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]);
    }

    const removeFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const value = {
        favourites,
        addFavourites,
        removeFavourites,
        isFavourite,
    }

    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}