// app/movie/[id]/MovieDetails.js

"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../Firebase'; // Firebase setup
import axios from 'axios';
import Navbar from '@/app/Components/Navbar';

const MovieDetails = ({ params }) => {
  const router = useRouter();
  const { id } = params; // Dynamic route parameter
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const user = auth.currentUser;

      if (!user) {
        // If user is not authenticated, redirect to the sign-in page
        router.push('/Sign');
        return;
      }

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=      &language=en-US`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movie details');
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id, router]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} // Dynamically set background image
            alt={movie?.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 flex items-center h-full bg-gradient-to-r from-black/50 via-black/40 to-transparent">
          <div className="px-8 lg:px-16 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">{movie?.title}</h1>
            <p className="mt-2 text-xl">
              {new Date(movie?.release_date).getFullYear()} | {movie?.vote_average} Rating | {movie?.runtime} mins
            </p>
            <p className="mt-4 max-w-md">
              {movie?.overview}
            </p>
            <button className='mt-10 bg-red-600 px-5 py-6'>Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
