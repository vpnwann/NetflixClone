import React from 'react'
import Navbar from './Components/Navbar'
import Movies from './Components/Netflix'
import FavoriteMovies from './Components/Netflix'
import PopularTVShows from './Components/Netflix'
import Moviess from './Components/Movies'
import Link from 'next/link'
import NextWatch from './Components/NextWatch'

export default function page() {
  return (
   <>
   <Navbar />
   <h1 className='   mt-40  font-extrabold ml-5 text-5xl'>Only on Netflix</h1>
   <p className=' ml-2 px-3 py-3'>Netflix is the home of amazing original programming that you can’t find anywhere <br/> else. Movies, TV shows, specials and more, all tailored specifically to you.</p>
  <h1 className=' mt-5 ml-5'>Popular Tv Shows</h1>

  <PopularTVShows />
   

  <h1 className=' mt-5 ml-5'>Popular Movies</h1>
  <Moviess />
  <h1 className=' mt-5 ml-5'>Your Next Watch</h1>
  <NextWatch />


  <img 
  src='https://user-images.githubusercontent.com/61585443/185205338-c20bb089-618f-49e2-b740-1c02838030a4.png' 
  class="filter   blur-md"
/>




  <h1 className=' text-3xl mt-10 text-center'>There’s even more to watch</h1>
  <p className=' text-center p-3 text-2xl'>Netflix has an extensive library of feature films <br/> documentaries, TV shows, anime, award-winning <br/> Netflix originals and more. Watch as much as you want,<br/> anytime you want.</p>
   
  <div className="flex justify-center">
  <Link href="/Sign">
  <button  className=" bg-red-600 mt-5 px-10 py-3 text-white py-2 px-4 rounded">Join Now</button>
  </Link>
</div>
   
   <p className=' hover:underline text-slate-700 mt-20 p-12'>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com</p>


   <p className=' hover:underline text-slate-700  p-12'>Questions? Contact us.</p>
   
   </>
  )
}
