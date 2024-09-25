// app/movie/[id]/page.js

import axios from 'axios';
import MovieDetails from './MovieDetails'; // Import your client-side component

export async function generateStaticParams() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=50f9d872976dd51263efc6664d744ed4&language=en-US'
    );
    const movies = response.data.results;

    return movies.map(movie => ({
      id: movie.id.toString(), // Ensure ID is a string
    }));
  } catch (error) {
    console.error("Failed to fetch movies for static params:", error);
    return [];
  }
}

const MoviePage = ({ params }) => {
  return <MovieDetails params={params} />;
};

export default MoviePage;
