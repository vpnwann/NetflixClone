"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from '../Firebase'; // Adjust the import based on your Firebase configuration
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex bg-black items-center justify-between sm:h-10 md:justify-center py-8 px-4">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="/" aria-label="Home">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" height="100" width="100" alt="Logo" />
          </a>
        </div>
      </div>
      
      <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <span className="inline-flex">
              <Link href="/Sign/Signup" className="inline-flex mt-2 bg-red-600 items-center px-8 py-1 border border-transparent text-base leading-6 font-medium hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out">
                Join Now
              </Link>
            </span>
            <span className="inline-flex rounded-md shadow ml-2">
              <Link href="/Sign" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
                Sign in
              </Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
