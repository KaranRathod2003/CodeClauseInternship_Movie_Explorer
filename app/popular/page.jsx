'use client'

import { useEffect, useState } from "react";
import { BASE_URL } from "../constent";
import MovieGrid from "../components/MovieGrid";
import Modal from "../components/Modal";

export default function Popular(){
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        fetch(`${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error('Error fetching movies in Popular: ', error))
    }, [])

    function handleCloseModal(){
        setSelectedMovie(null)
    }

    function handleMovieClick(movie){
        setSelectedMovie(movie)
    }

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen">
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold m-3">Popular</h1>
                <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
                {selectedMovie && <Modal movie={selectedMovie} OnClose={handleCloseModal} />}
            </main>
        </div>
    )

}