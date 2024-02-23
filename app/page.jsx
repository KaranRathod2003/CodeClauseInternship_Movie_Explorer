'use client'

import { useState } from "react";
import { BASE_URL } from "./constent";
import Moviegrid from "./components/MovieGrid";
import Modal from "./components/Modal";

async function searchMovies(query){
  try{
    const response  =await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`)
    return await response.json();
  }
  catch(error){
    console.error('Error fetching data in searchMovies', error)
    return []
  }
}

export default function Home() {
const [query, setQuery] = useState('')
const [movies, setMovies] = useState([]);
const [selectedMovie, setSelectedMovie] = useState(null)

  function handleMovieClick(movie){
    setSelectedMovie(movie)
  }

  function handleCloseModal(){
    setSelectedMovie(null)
  }

  async function handleSearch(e){
    e.preventDefault();
    if (!query) return;
    const results = await searchMovies(query);
    setMovies(results.results)
  }

  console.log(movies)
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full min-h-screen">
      <main className="text-white flex flex-col items-center justify-center py-2 min-h-screen">
        <h1 className="text-6xl font-bold">Movie KingDom</h1>
        <form onSubmit={handleSearch} className="mt-10 bor">
        <input type="text" className="ml-5 px-3 py-2 rounded-2xl text-black" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies.." />
        <button className="ml-7 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl px-3 py-2 text-white hover:from-pink-500 hover:to-yellow-500 " type="submit">Search</button>
        </form>
        <Moviegrid movies={movies} handleMovieClick={handleMovieClick} />
      </main>
      <Modal movie={selectedMovie} OnClose={handleCloseModal} />
    </div>
  );
}
