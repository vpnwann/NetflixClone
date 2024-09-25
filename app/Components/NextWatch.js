"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import { auth } from '../Firebase';
export default function NextWatch() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  
  const router = useRouter();
  useEffect(() => {
    const fetchPopularTVShows = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            
            language: 'en-US',
            
            page: '2',
            sort_by: 'popularity.desc'
          },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY5ZDg3Mjk3NmRkNTEyNjNlZmM2NjY0ZDc0NGVkNCIsIm5iZiI6MTcyNzE1MTg4OC44OTc0NTUsInN1YiI6IjY2ZjIzYzdkYTk3ODgwMTQ4ZjNiNTg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NL0wr6m3Oj0VVl9a2NSGopyOJuDke9fUXdKL_9wPyqU',
        },
      };

      try {
        const response = await axios.request(options);
        setShows(response.data.results || []); // Assuming the data you need is in `results`
      } catch (err) {
        console.error(err);
        setError('Failed to fetch popular TV shows');
      }
    };

    fetchPopularTVShows();
  }, []); // Runs only once when the component mounts

  
  const handleCardClick = (movie) => {
    const user = auth.currentUser; // Get current authenticated user

    if (!user) {
      router.push('/Sign/Signup'); // Redirect to signin page if not authenticated
    } else {
      // Handle the authenticated user action, e.g., show movie details
      router.push(`/movie/${movie.id}`);
    }
  };



  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-full">
    
    <div className="flex overflow-x-scroll space-x-4 p-4">
      {shows.map((movie, index) => (
        <div className="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg min-w-[200px] max-w-[200px]"
        key={index}
        
        onClick={() => handleCardClick(movie)} >
        <div className="relative">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             
            width={200} 
            height={300} 
            className="object-contain w-full h-48" 
          />
          <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 text-white">
            <h3 className="text-center text-sm">{movie.original_title}</h3>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
  );
}

